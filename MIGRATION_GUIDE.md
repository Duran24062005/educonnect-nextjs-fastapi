# 📖 Guía de Migración - Estructura del Frontend

## 🎯 Objetivo

Esta guía te ayudará a migrar los componentes y rutas existentes a la nueva estructura organizada.

## 📋 Checklist de Migración

### 1. Componentes de Layout ✅

- [x] `Header.tsx` → `src/components/layout/Header.tsx`
- [x] `Footer.tsx` → `src/components/layout/Footer.tsx`
- [ ] `Sidebar.tsx` → `src/components/layout/Sidebar.tsx` (si existe)

### 2. Componentes de Home ✅

- [x] `Hero.tsx` → `src/components/features/home/Hero.tsx`
- [x] `Features.tsx` → `src/components/features/home/Features.tsx`
- [x] `About.tsx` → `src/components/features/home/About.tsx`

### 3. Componentes de Teachers

- [ ] `app/components/users/teachers/Teacher.tsx` → `src/components/features/teachers/TeacherDashboard.tsx`
- [ ] `app/components/users/teachers/screens/` → `src/components/features/teachers/screens/`
- [ ] `app/components/users/teachers/components/` → `src/components/features/teachers/components/`

### 4. Componentes de Students

- [ ] `app/components/users/Students/Student.jsx` → `src/components/features/students/StudentDashboard.tsx`
- [ ] `app/components/users/Students/screens/` → `src/components/features/students/screens/`
- [ ] `app/components/users/Students/components/` → `src/components/features/students/components/`

### 5. Componentes de Parents

- [ ] `app/components/users/fathers/Father.jsx` → `src/components/features/parents/ParentDashboard.tsx`

### 6. Rutas

- [x] Home page → `app/(public)/page.tsx`
- [x] Login → `app/(auth)/login/page.tsx`
- [ ] Register → `app/(auth)/register/page.tsx`
- [x] Dashboard → `app/(dashboard)/dashboard/page.tsx`
- [ ] Teachers → `app/(dashboard)/teachers/page.tsx`
- [ ] Students → `app/(dashboard)/students/page.tsx`
- [ ] Parents → `app/(dashboard)/parents/page.tsx`
- [ ] About → `app/(public)/about/page.tsx`
- [ ] Docs → `app/(public)/docs/page.tsx`

## 🔄 Pasos para Migrar un Componente

### Paso 1: Mover el archivo

```bash
# Ejemplo: Mover Teacher.tsx
mv app/components/users/teachers/Teacher.tsx src/components/features/teachers/TeacherDashboard.tsx
```

### Paso 2: Convertir a TypeScript (si es .jsx)

1. Cambiar extensión de `.jsx` a `.tsx`
2. Agregar tipos a props:
```typescript
interface TeacherDashboardProps {
  // definir props
}

export default function TeacherDashboard({ ...props }: TeacherDashboardProps) {
  // código
}
```

### Paso 3: Actualizar imports

**Antes:**
```typescript
import { Header } from "../components/components/Header";
```

**Después:**
```typescript
import Header from "@/src/components/layout/Header";
```

### Paso 4: Actualizar rutas que usan el componente

Buscar todas las referencias y actualizar los imports.

## 📝 Ejemplo Completo de Migración

### Antes: `app/components/users/teachers/Teacher.tsx`

```typescript
import { Dashboard } from "./screens/Dasboard"
// ...
```

### Después: `src/components/features/teachers/TeacherDashboard.tsx`

```typescript
import { Dashboard } from "./screens/Dashboard"
import Header from "@/src/components/layout/Header";
// ...
```

## 🛠️ Herramientas Útiles

### Buscar y reemplazar imports

```bash
# Buscar todos los imports antiguos
grep -r "from.*components/components" app/

# Buscar todos los imports de Header
grep -r "Header" app/ --include="*.tsx" --include="*.ts"
```

### Script de migración automática (ejemplo)

```bash
#!/bin/bash
# migrate-components.sh

# Mover componentes de teachers
mkdir -p src/components/features/teachers/{screens,components}
mv app/components/users/teachers/Teacher.tsx src/components/features/teachers/TeacherDashboard.tsx
mv app/components/users/teachers/screens/* src/components/features/teachers/screens/
mv app/components/users/teachers/components/* src/components/features/teachers/components/
```

## ⚠️ Consideraciones Importantes

1. **No eliminar archivos antiguos inmediatamente**: Mantenerlos hasta que todo esté migrado
2. **Actualizar imports gradualmente**: Hacerlo feature por feature
3. **Probar después de cada migración**: Asegurarse de que todo funciona
4. **Commit frecuente**: Hacer commits después de cada feature migrada

## 🧪 Testing

Después de migrar cada componente:

1. Verificar que el componente se renderiza correctamente
2. Verificar que los imports funcionan
3. Verificar que las rutas funcionan
4. Verificar que no hay errores de TypeScript

## 📚 Recursos

- Ver `REFACTORING_FRONTEND.md` para la estructura completa
- Ver `FRONTEND_STRUCTURE.md` para la documentación de la estructura
