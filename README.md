# Meme App - Frontend

Este proyecto es la parte del frontend de una aplicación de memes desarrollada en React.

## Cómo Iniciar el Proyecto

Para iniciar el proyecto, sigue los siguientes pasos:

1. **Instalar Dependencias**: Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```bash
   npm install
   ```

2. **Iniciar el Servidor de Desarrollo**: Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo ejecutando el siguiente comando:

   ```bash
   npm run dev
   ```

Esto iniciará el servidor de desarrollo para el frontend y abrirá la aplicación en tu navegador web por defecto.

## Estructura de Carpetas

El proyecto sigue la siguiente estructura de carpetas:

    src/
    ├── components/
    │   └── layout/
    │       ├── Layout.tsx
    │       └── Navbar.tsx
    ├── pages/
    │   ├── CreateMemePage.tsx
    │   ├── LoginPage.tsx
    │   ├── MemeDetailPage.tsx
    │   └── MemeListPage.tsx
    ├── models/
    │   ├── Meme.ts
    │   └── User.ts
    ├── services/
    │   ├── memeService.ts
    │   └── userService.ts
    ├── theme/
    │   ├── AppTheme.tsx
    │   ├── index.ts
    │   └── purpleTheme.ts
    ├── test/
    │   ├── components/
    │   │   └── layout/
    │   │       ├── Layout.test.tsx
    │   │       └── Navbar.test.tsx
    │   ├── pages/   // Pruebas para páginas
    │   │   ├── CreateMemePage.test.tsx
    │   │   ├── LoginPage.test.tsx
    │   │   ├── MemeDetailPage.test.tsx
    │   │   └── MemeListPage.test.tsx
    │   ├── models/   // Pruebas para modelos
    │   │   ├── Meme.test.ts
    │   │   └── User.test.ts
    │   └── services/   // Pruebas para servicios
    │       ├── memeService.test.ts
    │       └── userService.test.ts
    ├── App.tsx
    ├── Router.tsx
    └── main.tsx

- **`pages/`**: Directorio para las paginas de React.
- **`services/`**: Directorio para los servicios, como el cliente de la API.
- **`models/`**: Directorio para los modelos.
- **`theme/`**: Directorio para los temas.
- **`App.jsx`**: Componente principal de la aplicación.
- **`Router.jsx`**: Componente principal de las rutas.
- **`main.jsx`**: Archivo de entrada de React donde se monta la aplicación.
