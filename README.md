<p align="center">
  <a href="https://nextjs-fastapi-starter.vercel.app/">
    <img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" height="96">
    <h3 align="center">Next.js FastAPI Starter</h3>
  </a>
</p>

<p align="center">Simple Next.j 14 boilerplate that uses <a href="https://fastapi.tiangolo.com/">FastAPI</a> as the API backend.</p>

<br/>

## Introduction

This is a hybrid Next.js 14 + Python template. One great use case of this is to write Next.js apps that use Python AI libraries on the backend, while still having the benefits of Next.js Route Handlers and Server Side Rendering.

## How It Works

The Python/FastAPI server is mapped into to Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](https://github.com/digitros/nextjs-fastapi/blob/main/next.config.js) to map any request to `/api/py/:path*` to the FastAPI API, which is hosted in the `/api` folder.

Also, the app/api routes are available on the same domain, so you can use NextJs Route Handlers and make requests to `/api/...`.

On localhost, the rewrite will be made to the `127.0.0.1:8000` port, which is where the FastAPI server is running.

In production, the FastAPI server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.

## Demo

https://nextjs-fastapi-starter.vercel.app/

## Deploy Your Own

You can clone & deploy it to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdigitros%2Fnextjs-fastapi%2Ftree%2Fmain)

## Developing Locally

You can clone & create this repo with the following command

```bash
npx create-next-app nextjs-fastapi --example "https://github.com/digitros/nextjs-fastapi"
```

## Getting Started

First, create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

Then, install the dependencies:

```bash
npm run setup
# or
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The FastApi server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000) – feel free to change the port in `package.json` (you'll also need to update it in `next.config.js`).

## Project Notes

- Frontend requests are centralized in `app/api/apis/*` and use `NEXT_PUBLIC_API_BASE_URL`.
- `npm run typecheck` validates the TypeScript layer without building the app.
- `npm run fastapi-dev` no longer reinstalls Python dependencies on every boot.

## Docker

To run the full stack with Docker:

```bash
docker compose up --build
```

This will expose:

- Frontend on `http://localhost:3000`
- Backend on `http://localhost:8000`
- FastAPI docs on `http://localhost:3000/docs` or `http://localhost:8000/api/py/docs`

Notes:

- `docker-compose.yml` mounts `./api/uploads` and `./api/educonnect_db.sqlite` to persist uploaded files and SQLite data.
- The frontend uses `NEXT_PUBLIC_API_BASE_URL=http://localhost:8000` for browser requests.
- Internally, Next.js proxies docs/OpenAPI requests to FastAPI using `INTERNAL_API_BASE_URL=http://backend:8000`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [FastAPI Documentation](https://fastapi.tiangolo.com/) - learn about FastAPI features and API.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<p align="center">
  <a href="https://edu-connect-beta.vercel.app/">
    <img src="https://edu-connect-beta.vercel.app/img/EduConectLogo.png" height="96">
    <h1 align="center">EduConnect</h1>
  </a>
</p>

<p align="center">Simple Next.j 14 boilerplate that uses <a href="https://fastapi.tiangolo.com/">FastAPI</a> as the API backend.</p>

<br/>


EduConnect es una plataforma educativa integral diseñada para facilitar la gestión académica y mejorar la comunicación entre estudiantes, maestros y padres. Este proyecto es una iniciativa abierta, donada a [Nombre de la Escuela], con el objetivo de proporcionar a los estudiantes una oportunidad de aprendizaje práctico en desarrollo de software.

## Objetivo del Proyecto

El objetivo principal de EduConnect es no solo ofrecer una herramienta útil para la gestión académica, sino también brindar a los estudiantes que decidan hacer parte, la oportunidad de aprender y desarrollar habilidades en programación, desarrollo web, y gestión de proyectos. A largo plazo, la idea es que los estudiantes puedan ganar experiencia mientras reciben un apoyo económico por el mantenimiento de la aplicación.

## Funcionalidades Clave

- **Gestión de Estudiantes**: Crear, actualizar y eliminar perfiles de estudiantes.
- **Gestión de Notas y Materias**: Registro y actualización de notas, administración de perfiles de materias.
- **Portal de Maestros**: Acceso exclusivo para la gestión de calificaciones e informes.
- **Consultas y Reportes**: Generación de informes académicos y análisis educativos.
- **Portal para Padres**: Consulta de notas y comunicación directa con los maestros.

## Tecnologías Utilizadas

- **Backend**:
  - Python (FastApi)
  - Frameworks: FastApi
  - Base de Datos: PostgreSQL
- **Seguridad**:
  - Autenticación y Autorización: JWT, OAuth
  - Encriptación de Contraseñas: bcrypt
- **Frontend**:
  - Framework: Next.js
  - Componentes: React
  - Estilos: CSS, Tailwind CSS

## Cómo Contribuir

Este proyecto es de código abierto y cualquier persona interesada puede contribuir. Si eres un estudiante de [Nombre de la Escuela] y te gustaría participar, sigue estos pasos:

1. **Clona el repositorio**:  

   ```bash
   git clone https://github.com/Duran24062005/EduConnect.git
   ```

2. **Configura tu entorno de desarrollo**:  
   Instala las dependencias necesarias utilizando pip (para Python) o npm (para Node.js) y asegúrate de tener configurada la base de datos.

3. **Contribuye**:  
   - Desarrolla nuevas funcionalidades.
   - Corrige errores.
   - Mejora la documentación.
   - Participa en las discusiones del proyecto.

4. **Envía tus cambios**:  
   - Crea una nueva rama para tus cambios.
   - Haz un pull request explicando lo que has añadido o modificado.

## Cómo Ayudará a los Estudiantes

EduConnect no solo es una herramienta práctica, sino también una plataforma educativa. Al participar en su desarrollo y mantenimiento, los estudiantes obtendrán:

- **Experiencia Práctica**: Trabajar en un proyecto real, aplicando conocimientos de programación, desarrollo web, y bases de datos.
- **Apoyo Económico**: Con el tiempo, el mantenimiento de la aplicación generará ingresos, los cuales se utilizarán para apoyar económicamente a los estudiantes que contribuyan al proyecto.
- **Desarrollo Profesional**: La experiencia obtenida será valiosa para el desarrollo de sus futuras carreras en tecnología.

## Licencia

Este proyecto está licenciado bajo licencia de código de propietario. Consulta el archivo `LICENSE` para más detalles.

---
