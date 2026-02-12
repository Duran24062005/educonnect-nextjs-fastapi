# 🐳 Inicio Rápido con Docker

## Opción 1: Script Automático (Recomendado)

```bash
./docker-start.sh
```

El script te guiará a través del proceso de inicio.

## Opción 2: Comandos Manuales

### Producción

```bash
# Construir e iniciar
docker-compose up --build -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

### Desarrollo

```bash
# Iniciar con hot-reload
docker-compose -f docker-compose.dev.yml up --build
```

## 🌐 URLs

Una vez iniciado:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8000
- **API Docs**: http://localhost:8000/api/py/docs

## 📚 Documentación Completa

Para más detalles, consulta [DOCKER.md](./DOCKER.md)
