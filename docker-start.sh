#!/bin/bash

# Script para iniciar el proyecto con Docker

set -e

echo "🐳 Iniciando EduConnect con Docker..."
echo ""

# Verificar si Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "❌ Docker no está instalado. Por favor instala Docker primero."
    exit 1
fi

# Verificar si Docker Compose está instalado
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose no está instalado. Por favor instala Docker Compose primero."
    exit 1
fi

# Verificar si existe archivo .env
if [ ! -f .env ]; then
    echo "⚠️  Archivo .env no encontrado. Creando desde .env.example..."
    if [ -f .env.example ]; then
        cp .env.example .env
        echo "✅ Archivo .env creado. Por favor edítalo con tus valores."
    else
        echo "⚠️  .env.example no encontrado. Continuando sin .env..."
    fi
fi

# Preguntar modo de ejecución
echo "Selecciona el modo de ejecución:"
echo "1) Producción (recomendado)"
echo "2) Desarrollo (con hot-reload)"
read -p "Opción [1]: " mode
mode=${mode:-1}

if [ "$mode" == "2" ]; then
    echo ""
    echo "🚀 Iniciando en modo DESARROLLO..."
    docker-compose -f docker-compose.dev.yml up --build
else
    echo ""
    echo "🚀 Iniciando en modo PRODUCCIÓN..."
    echo ""
    echo "Construyendo imágenes..."
    docker-compose build
    
    echo ""
    echo "Iniciando contenedores..."
    docker-compose up -d
    
    echo ""
    echo "✅ Contenedores iniciados!"
    echo ""
    echo "📊 Estado de los contenedores:"
    docker-compose ps
    
    echo ""
    echo "📝 Para ver los logs:"
    echo "   docker-compose logs -f"
    echo ""
    echo "🌐 URLs:"
    echo "   Frontend: http://localhost:3000"
    echo "   Backend:  http://localhost:8000"
    echo "   API Docs: http://localhost:8000/api/py/docs"
    echo ""
    echo "🛑 Para detener los contenedores:"
    echo "   docker-compose down"
fi
