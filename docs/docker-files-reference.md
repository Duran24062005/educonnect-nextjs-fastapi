# Docker Reference

Este documento explica, línea por línea, para qué sirve cada archivo Docker del proyecto.

## Archivo: `docker-compose.yml`

```yaml
services:
  backend:
    build:
      context: .
      dockerfile: Dockerfile.backend
    container_name: educonnect-backend
    env_file:
      - .env
    environment:
      DOMAIN: http://localhost:8000
    ports:
      - "8000:8000"
    volumes:
      - ./api/uploads:/app/api/uploads
      - ./api/educonnect_db.sqlite:/app/api/educonnect_db.sqlite
    restart: unless-stopped

  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
      args:
        NEXT_PUBLIC_API_BASE_URL: http://localhost:8000
        INTERNAL_API_BASE_URL: http://backend:8000
    container_name: educonnect-frontend
    depends_on:
      - backend
    environment:
      NODE_ENV: production
      NEXT_PUBLIC_API_BASE_URL: http://localhost:8000
      INTERNAL_API_BASE_URL: http://backend:8000
    ports:
      - "3000:3000"
    restart: unless-stopped
```

1. `services:` define los servicios que Docker Compose debe levantar.
2. `backend:` crea la definición del contenedor del backend.
3. `build:` indica que la imagen del backend se construye localmente.
4. `context: .` usa la raíz del repositorio como contexto de build.
5. `dockerfile: Dockerfile.backend` especifica qué Dockerfile se usará para construir el backend.
6. `container_name: educonnect-backend` asigna un nombre fijo al contenedor del backend.
7. `env_file:` indica que se cargarán variables de entorno desde archivo.
8. `- .env` carga el archivo `.env` del repositorio dentro de la configuración del contenedor.
9. `environment:` define variables de entorno adicionales o sobrescritas directamente en Compose.
10. `DOMAIN: http://localhost:8000` fija el dominio base del backend para el contenedor.
11. `ports:` publica puertos del contenedor hacia la máquina host.
12. `- "8000:8000"` expone el puerto `8000` local apuntando al `8000` del backend.
13. `volumes:` monta archivos o carpetas del host dentro del contenedor.
14. `- ./api/uploads:/app/api/uploads` persiste los archivos subidos fuera del contenedor.
15. `- ./api/educonnect_db.sqlite:/app/api/educonnect_db.sqlite` persiste la base SQLite del backend en el host.
16. `restart: unless-stopped` reinicia el backend automáticamente salvo que se detenga manualmente.
17. Línea en blanco: separa visualmente ambos servicios.
18. `frontend:` crea la definición del contenedor del frontend.
19. `build:` indica que la imagen del frontend también se construye localmente.
20. `context: .` usa la raíz del repositorio como contexto de build del frontend.
21. `dockerfile: Dockerfile.frontend` selecciona el Dockerfile del frontend.
22. `args:` define argumentos de build disponibles durante la construcción de la imagen.
23. `NEXT_PUBLIC_API_BASE_URL: http://localhost:8000` inyecta la URL pública del backend en el build de Next.js.
24. `INTERNAL_API_BASE_URL: http://backend:8000` inyecta la URL interna para comunicación entre contenedores.
25. `container_name: educonnect-frontend` asigna un nombre fijo al contenedor del frontend.
26. `depends_on:` declara dependencias de arranque entre servicios.
27. `- backend` pide que Docker Compose inicie `backend` antes que `frontend`.
28. `environment:` define variables de entorno en tiempo de ejecución para el frontend.
29. `NODE_ENV: production` ejecuta Next.js en modo producción.
30. `NEXT_PUBLIC_API_BASE_URL: http://localhost:8000` expone la URL pública del backend al frontend en runtime.
31. `INTERNAL_API_BASE_URL: http://backend:8000` deja disponible la URL interna del backend dentro de la red Docker.
32. `ports:` publica puertos del frontend.
33. `- "3000:3000"` expone la aplicación de Next.js en `http://localhost:3000`.
34. `restart: unless-stopped` reinicia el frontend automáticamente salvo que se detenga manualmente.

## Archivo: `Dockerfile.frontend`

```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
ARG NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
ARG INTERNAL_API_BASE_URL=http://backend:8000
ENV NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}
ENV INTERNAL_API_BASE_URL=${INTERNAL_API_BASE_URL}
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
ENV INTERNAL_API_BASE_URL=http://backend:8000
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
EXPOSE 3000
CMD ["npm", "run", "start"]
```

1. `FROM node:20-alpine AS deps` inicia una etapa llamada `deps` basada en Node.js 20 sobre Alpine para instalar dependencias.
2. `WORKDIR /app` define `/app` como directorio de trabajo dentro de la imagen.
3. `COPY package.json package-lock.json ./` copia los manifiestos de dependencias al contenedor.
4. `RUN npm ci` instala dependencias de forma reproducible usando el lockfile.
5. Línea en blanco: separa la etapa de dependencias de la etapa de compilación.
6. `FROM node:20-alpine AS builder` crea la etapa `builder`, también basada en Node.js 20 Alpine.
7. `WORKDIR /app` vuelve a fijar `/app` como directorio de trabajo para esta etapa.
8. `ARG NEXT_PUBLIC_API_BASE_URL=http://localhost:8000` define un argumento de build para la URL pública del API.
9. `ARG INTERNAL_API_BASE_URL=http://backend:8000` define un argumento de build para la URL interna del API.
10. `ENV NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}` convierte el argumento anterior en variable de entorno durante el build.
11. `ENV INTERNAL_API_BASE_URL=${INTERNAL_API_BASE_URL}` expone el argumento interno como variable de entorno del proceso de build.
12. `COPY --from=deps /app/node_modules ./node_modules` reutiliza las dependencias instaladas en la etapa `deps`.
13. `COPY . .` copia el resto del código fuente del proyecto al contenedor.
14. `RUN npm run build` genera la aplicación compilada de Next.js.
15. Línea en blanco: separa la etapa de build de la etapa final de ejecución.
16. `FROM node:20-alpine AS runner` crea la imagen final optimizada para ejecutar la app.
17. `WORKDIR /app` establece `/app` como directorio de trabajo en la imagen final.
18. `ENV NODE_ENV=production` fuerza el modo producción en runtime.
19. `ENV PORT=3000` define el puerto interno donde arrancará Next.js.
20. `ENV NEXT_PUBLIC_API_BASE_URL=http://localhost:8000` deja un valor por defecto para la URL pública del API en runtime.
21. `ENV INTERNAL_API_BASE_URL=http://backend:8000` deja un valor por defecto para la URL interna del API en runtime.
22. `COPY --from=builder /app/package.json ./package.json` copia el manifiesto del proyecto a la imagen final.
23. `COPY --from=builder /app/package-lock.json ./package-lock.json` copia el lockfile a la imagen final.
24. `COPY --from=builder /app/node_modules ./node_modules` copia las dependencias ya instaladas desde la etapa de build.
25. `COPY --from=builder /app/.next ./.next` copia el artefacto compilado de Next.js.
26. `COPY --from=builder /app/public ./public` copia los archivos estáticos públicos.
27. `COPY --from=builder /app/next.config.js ./next.config.js` copia la configuración de Next.js necesaria en runtime.
28. `EXPOSE 3000` documenta que el contenedor escucha en el puerto `3000`.
29. `CMD ["npm", "run", "start"]` define el comando por defecto para arrancar el frontend.

## Archivo: `Dockerfile.backend`

```dockerfile
FROM python:3.12-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt-get update \
  && apt-get install -y --no-install-recommends build-essential \
  && rm -rf /var/lib/apt/lists/*

COPY requirements.docker.txt ./requirements.docker.txt
RUN pip install --no-cache-dir -r requirements.docker.txt

COPY . .

EXPOSE 8000
CMD ["python", "-m", "uvicorn", "api.index:app", "--host", "0.0.0.0", "--port", "8000"]
```

1. `FROM python:3.12-slim` usa una imagen base liviana con Python 3.12 para el backend.
2. Línea en blanco: mejora legibilidad entre bloques.
3. `WORKDIR /app` establece `/app` como directorio de trabajo.
4. Línea en blanco: separa configuración básica del bloque de variables.
5. `ENV PYTHONDONTWRITEBYTECODE=1` evita que Python genere archivos `.pyc` dentro del contenedor.
6. `ENV PYTHONUNBUFFERED=1` hace que logs y salidas se escriban sin buffering, útil para observar logs en tiempo real.
7. Línea en blanco: separa variables de entorno de dependencias del sistema.
8. `RUN apt-get update \` actualiza el índice de paquetes del sistema.
9. `&& apt-get install -y --no-install-recommends build-essential \` instala compiladores y herramientas básicas necesarias para compilar dependencias nativas.
10. `&& rm -rf /var/lib/apt/lists/*` limpia la caché de `apt` para reducir el tamaño final de la imagen.
11. Línea en blanco: separa dependencias del sistema del bloque de Python.
12. `COPY requirements.docker.txt ./requirements.docker.txt` copia el archivo de dependencias Python usado para Docker.
13. `RUN pip install --no-cache-dir -r requirements.docker.txt` instala dependencias Python sin guardar caché local.
14. Línea en blanco: separa dependencias del código fuente.
15. `COPY . .` copia el código del proyecto completo al contenedor.
16. Línea en blanco: separa el contenido de la imagen del arranque.
17. `EXPOSE 8000` documenta que el backend escucha en el puerto `8000`.
18. `CMD ["python", "-m", "uvicorn", "api.index:app", "--host", "0.0.0.0", "--port", "8000"]` arranca la aplicación ASGI usando Uvicorn accesible desde cualquier interfaz de red del contenedor.

## Archivo: `.dockerignore`

```gitignore
.git
.gitignore
.next
node_modules
npm-debug.log
README.md
LICENSE
venv
__pycache__
*.pyc
*.pyo
*.pyd
.pytest_cache
.mypy_cache
.ruff_cache
.DS_Store
```

1. `.git` excluye el historial de Git del contexto de build.
2. `.gitignore` evita copiar la configuración de exclusiones de Git al contexto Docker.
3. `.next` evita enviar artefactos compilados previos de Next.js.
4. `node_modules` evita copiar dependencias locales de Node.js, que se reinstalan dentro de la imagen.
5. `npm-debug.log` excluye logs temporales de errores de npm.
6. `README.md` evita copiar documentación general que no es necesaria para construir la imagen.
7. `LICENSE` evita copiar el archivo de licencia al contexto de build.
8. `venv` excluye entornos virtuales locales de Python.
9. `__pycache__` evita copiar cachés de bytecode de Python.
10. `*.pyc` excluye archivos compilados de Python.
11. `*.pyo` excluye archivos optimizados de Python.
12. `*.pyd` excluye binarios de extensión Python generados localmente.
13. `.pytest_cache` excluye caché de pruebas de `pytest`.
14. `.mypy_cache` excluye caché de análisis estático de `mypy`.
15. `.ruff_cache` excluye caché del linter `ruff`.
16. `.DS_Store` excluye archivos de metadatos creados por macOS.

## Notas

- `docker-compose.yml` define cómo se orquestan frontend y backend juntos.
- Los `Dockerfile` definen cómo se construye cada imagen.
- `.dockerignore` reduce el tamaño del contexto de build y evita copiar archivos locales innecesarios.

## Hallazgos Operativos Sobre Reinicio Automático

Esta sección documenta un comportamiento importante del proyecto en entornos locales: los contenedores pueden volver a levantarse automáticamente al iniciar el sistema.

### Hallazgos

1. El patrón más probable no es un "contenedor fantasma", sino contenedores configurados para reiniciarse automáticamente.
2. En `docker-compose.yml`, este proyecto publica exactamente los puertos `8000:8000` para backend y `3000:3000` para frontend.
3. En el mismo archivo, ambos servicios usan `restart: unless-stopped`.
4. Esa combinación explica que los contenedores reaparezcan cuando Docker arranca al iniciar el sistema operativo.
5. Si `docker.service` está habilitado en el arranque del sistema, Docker volverá a iniciar contenedores persistidos que tengan política `unless-stopped`.
6. Bajo ese escenario, el comportamiento esperado es que `educonnect-backend` y `educonnect-frontend` se vuelvan a iniciar después de reiniciar la máquina.

### Qué Está Pasando

Lo más probable es que en algún momento se haya ejecutado:

```bash
docker compose up -d
```

Desde este repositorio. Cuando eso ocurre, Docker crea los contenedores y conserva su configuración, incluida la política de reinicio. Después, cuando arranca el daemon de Docker, esos contenedores pueden volver a iniciarse automáticamente.

### Cómo Confirmarlo

Para revisar qué contenedores están activos y qué puertos publican:

```bash
docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Ports}}\t{{.Status}}'
```

Si el comportamiento descrito proviene de este proyecto, deberían aparecer contenedores con nombres como:

- `educonnect-backend`
- `educonnect-frontend`

### Cómo Detenerlo Correctamente

Desde la raíz de este proyecto:

```bash
docker compose down
```

Ese comando detiene y elimina los contenedores definidos por el Compose del proyecto.

Si los contenedores siguieran reapareciendo, se puede quitar explícitamente su política de reinicio:

```bash
docker update --restart=no educonnect-backend educonnect-frontend
```

### Cómo Evitar Que Vuelva A Pasar

Si este proyecto no debe reiniciarse automáticamente al arrancar el sistema, hay dos opciones válidas en `docker-compose.yml`:

1. Cambiar `restart: unless-stopped` por `restart: "no"`.
2. Eliminar por completo la línea `restart`.

En este repositorio, eso aplica tanto al servicio `backend` como al servicio `frontend`.

### Limitación De La Investigación

La identificación exacta del contenedor responsable puede requerir revisar directamente el estado actual de Docker en la máquina donde corre el proyecto.

La inferencia queda sustentada por estos indicios:

- El proyecto expone simultáneamente los puertos `3000` y `8000`.
- Ambos servicios tienen `restart: unless-stopped`.
- Ese patrón coincide con el síntoma de contenedores que reaparecen tras reiniciar el sistema.
