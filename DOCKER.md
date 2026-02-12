# 🐳 Guía de Docker para EduConnect

Esta guía explica cómo ejecutar el proyecto EduConnect usando Docker y Docker Compose.

## 📋 Requisitos Previos

- Docker instalado (versión 20.10 o superior)
- Docker Compose instalado (versión 2.0 o superior)

Para verificar la instalación:
```bash
docker --version
docker-compose --version
```

## 🚀 Inicio Rápido

### 1. Construir y ejecutar en producción

```bash
# Construir las imágenes
docker-compose build

# Iniciar los contenedores
docker-compose up -d

# Ver los logs
docker-compose logs -f
```

### 2. Construir y ejecutar en desarrollo

```bash
# Usar el archivo de desarrollo
docker-compose -f docker-compose.dev.yml up --build
```

## 📝 Comandos Útiles

### Ver logs
```bash
# Todos los servicios
docker-compose logs -f

# Solo backend
docker-compose logs -f backend

# Solo frontend
docker-compose logs -f frontend
```

### Detener los contenedores
```bash
docker-compose down
```

### Detener y eliminar volúmenes
```bash
docker-compose down -v
```

### Reconstruir las imágenes
```bash
docker-compose build --no-cache
```

### Ejecutar comandos en los contenedores
```bash
# Backend
docker-compose exec backend bash

# Frontend
docker-compose exec frontend sh
```

### Ver el estado de los contenedores
```bash
docker-compose ps
```

## 🔧 Configuración

### Variables de Entorno

Las variables de entorno se pueden configurar de dos formas:

1. **Archivo `.env`** (recomendado):
   ```bash
   cp .env.example .env
   # Editar .env con tus valores
   ```

2. **Directamente en docker-compose.yml**:
   Edita la sección `environment` de cada servicio.

### Puertos

- **Backend**: `http://localhost:8000`
- **Frontend**: `http://localhost:3000`
- **API Docs**: `http://localhost:8000/api/py/docs`

Para cambiar los puertos, edita la sección `ports` en `docker-compose.yml`:
```yaml
ports:
  - "8001:8000"  # Cambiar puerto externo a 8001
```

## 🗂️ Volúmenes

Los siguientes directorios están montados como volúmenes:

- `./api/uploads` → Archivos subidos por usuarios
- `./api/educonnect_db.sqlite` → Base de datos SQLite
- `./logs` → Archivos de log

Esto permite que los datos persistan incluso si los contenedores se eliminan.

## 🏗️ Estructura de los Dockerfiles

### Backend (Dockerfile.backend)
- Basado en Python 3.11-slim
- Instala dependencias de `requirements.txt`
- Expone el puerto 8000
- Ejecuta uvicorn

### Frontend (Dockerfile.frontend)
- Multi-stage build para optimizar tamaño
- Basado en Node.js 20-alpine
- Build optimizado con `standalone` output
- Ejecuta servidor Next.js

## 🔍 Troubleshooting

### El backend no inicia
```bash
# Ver logs detallados
docker-compose logs backend

# Verificar que el puerto 8000 no esté en uso
lsof -i :8000

# Reconstruir la imagen
docker-compose build --no-cache backend
```

### El frontend no puede conectarse al backend
- Verifica que `NEXT_PUBLIC_API_URL` esté configurado correctamente
- En Docker, usa `http://backend:8000` para comunicación interna
- Verifica que ambos contenedores estén en la misma red

### Problemas con permisos de archivos
```bash
# Ajustar permisos de uploads
sudo chown -R $USER:$USER api/uploads

# Ajustar permisos de logs
sudo chown -R $USER:$USER logs
```

### Limpiar todo y empezar de nuevo
```bash
# Detener y eliminar contenedores, redes y volúmenes
docker-compose down -v

# Eliminar imágenes
docker-compose rm -f

# Limpiar sistema Docker (cuidado: elimina todo)
docker system prune -a
```

## 🚢 Producción

Para producción, considera:

1. **Usar variables de entorno seguras**:
   - Cambiar `SECRET_KEY` por un valor seguro
   - Configurar `CORS_ORIGINS` con dominios específicos
   - Usar base de datos PostgreSQL en lugar de SQLite

2. **Usar un reverse proxy** (nginx/traefik):
   ```yaml
   # Ejemplo con nginx
   nginx:
     image: nginx:alpine
     ports:
       - "80:80"
       - "443:443"
     volumes:
       - ./nginx.conf:/etc/nginx/nginx.conf
     depends_on:
       - backend
       - frontend
   ```

3. **Configurar SSL/TLS**:
   - Usar certificados SSL válidos
   - Configurar HTTPS en el reverse proxy

4. **Monitoreo y logs**:
   - Configurar logging centralizado
   - Usar herramientas como Prometheus/Grafana

## 📚 Recursos Adicionales

- [Documentación de Docker](https://docs.docker.com/)
- [Documentación de Docker Compose](https://docs.docker.com/compose/)
- [Next.js con Docker](https://nextjs.org/docs/deployment#docker-image)
- [FastAPI con Docker](https://fastapi.tiangolo.com/deployment/docker/)

## 🆘 Soporte

Si encuentras problemas:
1. Revisa los logs: `docker-compose logs -f`
2. Verifica las variables de entorno
3. Asegúrate de que los puertos no estén en uso
4. Revisa la documentación de Docker
