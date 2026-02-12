# 📁 Estructura del Frontend - EduConnect

## 🎯 Visión General

El frontend de EduConnect ha sido completamente reorganizado siguiendo las mejores prácticas de Next.js 14 con App Router, TypeScript y una arquitectura basada en features.

## 📂 Estructura de Directorios

```
educonnect-nextjs-fastapi/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Grupo de rutas de autenticación
│   │   ├── login/
│   │   │   └── page.tsx          # Página de login
│   │   ├── register/
│   │   │   └── page.tsx          # Página de registro
│   │   └── layout.tsx             # Layout para rutas de auth
│   │
│   ├── (dashboard)/               # Grupo de rutas protegidas
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Dashboard principal
│   │   ├── teachers/
│   │   │   └── page.tsx          # Gestión de maestros
│   │   ├── students/
│   │   │   └── page.tsx          # Gestión de estudiantes
│   │   ├── parents/
│   │   │   └── page.tsx          # Gestión de padres
│   │   └── layout.tsx             # Layout protegido (requiere auth)
│   │
│   ├── (public)/                 # Grupo de rutas públicas
│   │   ├── page.tsx              # Home page
│   │   ├── about/
│   │   │   └── page.tsx          # Página "Acerca de"
│   │   ├── docs/
│   │   │   └── page.tsx          # Documentación
│   │   └── layout.tsx            # Layout público
│   │
│   ├── api/                      # API Routes de Next.js
│   │   └── apis/                 # Clientes API
│   │       ├── teachers.ts
│   │       ├── students.ts
│   │       ├── courses.ts
│   │       └── ...
│   │
│   ├── layout.tsx                 # Root layout
│   └── globals.css                # Estilos globales
│
├── src/                           # Código fuente organizado
│   ├── components/
│   │   ├── ui/                    # Componentes UI reutilizables (shadcn)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   │
│   │   ├── layout/                # Componentes de layout
│   │   │   ├── Header.tsx         # Header compartido
│   │   │   ├── Footer.tsx         # Footer compartido
│   │   │   └── Sidebar.tsx        # Sidebar (si es necesario)
│   │   │
│   │   └── features/              # Componentes por feature/dominio
│   │       ├── auth/              # Componentes de autenticación
│   │       ├── teachers/          # Componentes de maestros
│   │       │   ├── TeacherDashboard.tsx
│   │       │   ├── screens/
│   │       │   └── components/
│   │       ├── students/          # Componentes de estudiantes
│   │       │   ├── StudentDashboard.tsx
│   │       │   ├── screens/
│   │       │   └── components/
│   │       ├── parents/           # Componentes de padres
│   │       └── home/              # Componentes de la página principal
│   │           ├── Hero.tsx
│   │           ├── Features.tsx
│   │           └── About.tsx
│   │
│   ├── hooks/                     # Custom React hooks
│   │   └── useAuth.ts             # Hook de autenticación
│   │
│   ├── lib/                       # Utilidades y configuraciones
│   │   ├── api/                   # Cliente API centralizado
│   │   │   ├── client.ts
│   │   │   ├── config.ts
│   │   │   └── types.ts
│   │   ├── utils.ts               # Funciones utilitarias
│   │   └── constants.ts           # Constantes de la aplicación
│   │
│   ├── types/                     # Tipos TypeScript
│   │   └── index.ts               # Tipos compartidos
│   │
│   └── contexts/                  # React Contexts
│       └── AuthContext.tsx        # Contexto de autenticación (futuro)
│
├── components/                    # Componentes UI de shadcn (no mover)
│   └── ui/
│
├── lib/                           # Utilidades (raíz)
│   └── utils.ts
│
└── public/                        # Archivos estáticos
    └── assets/
```

## 🔑 Conceptos Clave

### Route Groups `(group)`

Los grupos de rutas permiten organizar rutas sin afectar la URL:

- `(auth)` - Rutas de autenticación (`/login`, `/register`)
- `(dashboard)` - Rutas protegidas (`/dashboard`, `/teachers`, etc.)
- `(public)` - Rutas públicas (`/`, `/about`, `/docs`)

**Ventajas:**
- Organización lógica sin afectar URLs
- Layouts específicos por grupo
- Mejor estructura de carpetas

### Separación de Componentes

1. **UI Components** (`components/ui/`): Componentes reutilizables de shadcn/ui
2. **Layout Components** (`src/components/layout/`): Header, Footer, Sidebar
3. **Feature Components** (`src/components/features/`): Componentes específicos por dominio

### TypeScript

- Todos los nuevos archivos están en TypeScript
- Tipos centralizados en `src/types/`
- Interfaces bien definidas para todas las entidades

## 📝 Convenciones de Nomenclatura

### Archivos y Carpetas

- **Componentes**: PascalCase (`Header.tsx`, `TeacherDashboard.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useAuth.ts`)
- **Utilidades**: camelCase (`utils.ts`, `constants.ts`)
- **Tipos**: PascalCase (`User.ts`, `Teacher.ts`) o `index.ts` para tipos compartidos

### Rutas

- **Páginas**: `page.tsx`
- **Layouts**: `layout.tsx`
- **Loading**: `loading.tsx`
- **Error**: `error.tsx`
- **Not Found**: `not-found.tsx`

## 🚀 Cómo Usar la Nueva Estructura

### Crear un Nuevo Componente

1. **Componente de Feature**:
```typescript
// src/components/features/teachers/NewComponent.tsx
export default function NewComponent() {
  return <div>...</div>;
}
```

2. **Componente de Layout**:
```typescript
// src/components/layout/NewLayout.tsx
export default function NewLayout() {
  return <div>...</div>;
}
```

### Crear una Nueva Ruta

1. **Ruta Pública**:
```typescript
// app/(public)/new-page/page.tsx
export default function NewPage() {
  return <div>...</div>;
}
```

2. **Ruta Protegida**:
```typescript
// app/(dashboard)/new-feature/page.tsx
export default function NewFeature() {
  return <div>...</div>;
}
```

### Usar Hooks

```typescript
import { useAuth } from '@/src/hooks/useAuth';

export default function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  // ...
}
```

### Usar Tipos

```typescript
import type { Teacher, Student } from '@/src/types';

export default function MyComponent() {
  const teacher: Teacher = { ... };
  // ...
}
```

## 🔄 Migración de Archivos Antiguos

Ver `MIGRATION_GUIDE.md` para instrucciones detalladas sobre cómo migrar componentes existentes.

## 📚 Documentación Relacionada

- `REFACTORING_FRONTEND.md` - Resumen de cambios y mejoras
- `MIGRATION_GUIDE.md` - Guía paso a paso para migrar componentes
- `FRONTEND_STRUCTURE.md` - Documentación técnica detallada

## ✅ Beneficios de la Nueva Estructura

1. **Organización Clara**: Fácil encontrar componentes y rutas
2. **Escalabilidad**: Fácil agregar nuevas features
3. **Mantenibilidad**: Código más fácil de mantener
4. **Type Safety**: TypeScript en todo el proyecto
5. **Reutilización**: Componentes bien organizados y reutilizables
6. **Mejor DX**: Mejor experiencia de desarrollo

## 🎓 Próximos Pasos

1. Completar migración de componentes restantes
2. Implementar autenticación completa
3. Agregar tests unitarios
4. Mejorar manejo de errores
5. Optimizar rendimiento
