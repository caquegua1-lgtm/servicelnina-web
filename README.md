# 🚀 SERVICELNINA - Sitio Web Profesional

Sitio web moderno, responsivo y futurista para SERVICELNINA con múltiples páginas y integración con API.

## 📋 Características

✅ **5 Páginas Completas**
- Inicio (Hero futurista)
- Descargas (Catálogo de apps)
- Licencias (Sistema de gestión)
- Soporte (FAQ y contacto)
- Contacto (Formulario)

✅ **Diseño Premium**
- Fondo con partículas animadas
- Glassmorphism en tarjetas
- Gradientes dorados y azul eléctrico
- Completamente responsivo
- Animaciones suaves

✅ **Funcionalidad**
- Sistema de routing (SPA)
- Conectado a API de Railway
- Formulario de contacto funcional
- Validación de licencias
- Descarga de apps

## 🛠️ Instalación Local

### Opción 1: Con Node.js (Recomendado)

```bash
cd servicelnina-pro
npm start
```

Luego abre tu navegador en: http://localhost:3000

### Opción 2: Con Python

```bash
cd servicelnina-pro
python -m http.server 3000
```

## 🌐 Rutas Disponibles

```
http://localhost:3000/          → Inicio
http://localhost:3000/descargas  → Descargas
http://localhost:3000/licencias  → Licencias
http://localhost:3000/soporte    → Soporte
http://localhost:3000/contacto   → Contacto
```

## 📁 Estructura de Archivos

```
servicelnina-pro/
├── index.html                 # Página principal (todas las secciones)
├── server.js                  # Servidor Node.js
├── package.json               # Configuración npm
├── netlify.toml              # Configuración Netlify
├── assets/
│   ├── css/
│   │   └── styles.css        # Estilos globales
│   └── js/
│       ├── main.js           # Lógica principal
│       ├── router.js         # Sistema de routing
│       └── api.js            # Cliente API
└── README.md                 # Este archivo
```

## 🚀 Deployment en Netlify

### Paso 1: Preparar el Proyecto

Asegúrate de que todos los archivos estén en lugar:
- `index.html`
- `assets/css/styles.css`
- `assets/js/*.js`
- `netlify.toml`

### Paso 2: Crear Cuenta en Netlify

Visita: https://netlify.com

### Paso 3: Conectar tu Dominio

1. En Netlify, ve a **Domain Settings**
2. Agrega tu dominio: `servicelnina.com.bo`
3. Sigue las instrucciones para actualizar DNS

### Paso 4: Desplegar

**Con Git (Recomendado):**
```bash
# 1. Crear repositorio Git
git init
git add .
git commit -m "Initial commit"

# 2. Conectar con Netlify
# En Netlify, selecciona "Connect a different Git provider"
# Elige GitHub y autoriza
# Selecciona tu repositorio

# 3. Configurar build (si es necesario)
# Build command: (dejar vacío)
# Publish directory: . (o servicelnina-pro/)
```

**Sin Git (Drop & Drop):**
1. Descarga la carpeta `servicelnina-pro` completa
2. En Netlify, arrastra la carpeta al área de drop
3. Espera a que se despliegue

### Paso 5: Vincular Dominio

1. Ve a **Domain settings** en Netlify
2. Agrega tu dominio registrado
3. Actualiza los nameservers en tu proveedor de dominio

## 🔧 Configuración de API

El sitio está configurado para conectarse con tu servidor de Railway:

```javascript
const API = {
    baseURL: 'https://servicelnina-production.up.railway.app',
    // ... métodos de API
}
```

### Endpoints esperados:

```
GET  /api/apps                   → Lista de apps
POST /api/apps/:id/download      → Descargar app
POST /api/licenses/validate      → Validar licencia
POST /api/contact                → Enviar contacto
GET  /api/support/tickets        → Tickets de soporte
```

## 📱 Dispositivos Soportados

✅ Desktop (1920px+)
✅ Tablet (768px - 1024px)
✅ Mobile (320px - 767px)

## 🎨 Personalización

### Cambiar Colores

Edita `assets/css/styles.css`:

```css
:root {
    --primary: #050505;        /* Negro de fondo */
    --gold: #D4AF37;          /* Oro principal */
    --electric-blue: #2563EB;  /* Azul eléctrico */
    --neon-purple: #A855F7;    /* Púrpura neón */
}
```

### Cambiar Apps

Edita `assets/js/api.js` - array `apps`:

```javascript
API.apps = [
    {
        id: 1,
        name: 'Tu App',
        description: 'Descripción',
        price: '$XX.XX',
        // ...
    }
]
```

### Cambiar Textos

Edita `index.html` - busca los textos y reemplaza.

## 🔐 Seguridad

- ✅ Conexión HTTPS (Netlify proporciona certificado gratis)
- ✅ Sin datos sensibles en el frontend
- ✅ API en servidor separado (Railway)
- ✅ Validación de formularios

## 📊 Analytics

Para agregar Google Analytics:

1. Obtén tu GA_ID
2. Agrega a `index.html` antes de `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🐛 Solución de Problemas

### Página en blanco
- Abre DevTools (F12)
- Revisa la consola por errores
- Asegúrate que los archivos CSS y JS se carguen

### Rutas no funcionan
- Asegúrate que `server.js` esté sirviendo `index.html` para todas las rutas
- En Netlify, configura `_redirects` o `netlify.toml`

### API no responde
- Verifica que `https://servicelnina-production.up.railway.app` esté en línea
- Revisa headers CORS
- Los datos locales se usan como fallback

## 📞 Soporte

Para ayuda con el despliegue:
- 📧 Email: caquegua1@gmail.com
- 💬 WhatsApp: +591 76547194

## 📄 Licencia

MIT - Libre de usar y modificar

---

**Versión:** 1.0.0  
**Última actualización:** 2025  
**Estado:** ✅ Producción Ready
