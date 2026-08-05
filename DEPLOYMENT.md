# 🚀 GUÍA COMPLETA DE DEPLOYMENT

## Tu Sitio está listo para PRODUCCIÓN ✅

Este archivo te guía paso a paso para subir tu sitio a internet en tu dominio `servicelnina.com.bo`

---

## 📋 OPCIÓN 1: Deployment MÁS FÁCIL (Recomendado)

### Requisitos:
- ✅ Cuenta en GitHub (gratis)
- ✅ Cuenta en Netlify (gratis)
- ✅ Tu dominio `servicelnina.com.bo` registrado

### PASO 1: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `servicelnina-web`
3. Descripción: `Sitio web de SERVICELNINA`
4. Elige: **Public** (para que Netlify pueda acceder)
5. Click en **Create repository**

### PASO 2: Subir archivos a GitHub

En tu computadora, abre PowerShell en la carpeta `servicelnina-pro`:

```powershell
# Ir a la carpeta
cd "C:\Users\123ninas\web-apps-store\servicelnina-pro"

# Inicializar git
git init
git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# Agregar todos los archivos
git add .

# Crear primer commit
git commit -m "Proyecto inicial de SERVICELNINA"

# Conectar con GitHub (reemplaza USERNAME y REPO)
git remote add origin https://github.com/USERNAME/servicelnina-web.git
git branch -M main
git push -u origin main
```

### PASO 3: Conectar Netlify con GitHub

1. Ve a https://netlify.com y **Sign Up** (o Login si ya tienes cuenta)
2. Click en **Add new site** → **Import an existing project**
3. Elige **GitHub**
4. Autoriza a Netlify
5. Busca `servicelnina-web` y selecciona
6. En **Site name**, escribe: `servicelnina`
7. Click en **Deploy site**

**¡Tu sitio ya está en:** https://servicelnina.netlify.app ✅

### PASO 4: Conectar tu Dominio

1. En Netlify, ve a **Site settings** → **Domain management**
2. Click en **Add custom domain**
3. Escribe: `servicelnina.com.bo`
4. Netlify te dirá: "This domain is already registered"
5. Click en **Yes, add domain**

Ahora ves un recuadro amarillo: "Check DNS configuration"

### PASO 5: Actualizar DNS de tu Dominio

Esto es lo MÁS IMPORTANTE. Tu proveedor de dominio debe ser actualizado.

**Si tu dominio es de:**

#### A) Registro.BO o similar (.bo)

1. Entra a tu panel de control del registro
2. Busca **DNS** o **Nameservers**
3. Cambia los nameservers a:
   ```
   ns1.netlify.com
   ns2.netlify.com
   ns3.netlify.com
   ```
4. Guarda los cambios
5. Espera 24-48 horas para que se propague

#### B) GoDaddy, NameCheap, etc.

1. Entra a tu panel de control
2. Busca **DNS Settings**
3. Crea un registro **CNAME**:
   ```
   CNAME → servicelnina.com.bo → servicelnina.netlify.app
   ```
4. Guarda y espera propagación

#### C) No sé dónde está mi dominio

1. Abre https://whois.com
2. Escribe: `servicelnina.com.bo`
3. Verás quién es el registrador
4. Entra a ese sitio y busca DNS

### PASO 6: Verificar que funcione

```
https://servicelnina.com.bo  ← Deberá funcionar
```

Si aún no funciona:
- Espera más tiempo (hasta 48 horas)
- Revisa que los DNS estén correctamente configurados
- Contacta al soporte de tu registrador

---

## 📋 OPCIÓN 2: Deploy directo (Sin Git)

### Paso 1: Descargar carpeta
Descarga `servicelnina-pro` completa a tu computadora

### Paso 2: Ir a Netlify
https://netlify.com → Sign Up → **Deploy** (botón azul)

### Paso 3: Drag & Drop
Arrastra la carpeta `servicelnina-pro` al área punteada

**¡Listo!** Tu sitio está en Netlify

### Paso 4: Conectar Dominio
Igual que la Opción 1, Paso 4-6

---

## 📋 OPCIÓN 3: Línea de Comandos (Avanzado)

### Instalar Netlify CLI

```powershell
npm install -g netlify-cli
```

### Deployar

```powershell
cd "C:\Users\123ninas\web-apps-store\servicelnina-pro"
netlify deploy --prod
```

Sigue las instrucciones en pantalla.

---

## 🔍 VERIFICACIÓN FINAL

Después de desplegar, verifica que funcione:

```
✅ https://servicelnina.com.bo
✅ https://servicelnina.com.bo/descargas
✅ https://servicelnina.com.bo/licencias
✅ https://servicelnina.com.bo/soporte
✅ https://servicelnina.com.bo/contacto
```

Todas deberían mostrar contenido diferente.

---

## 🔐 CERTIFICADO HTTPS

Netlify proporciona **certificado SSL GRATIS** automáticamente. ¡No debes pagar nada!

Verifica que tu sitio tenga 🔒 (candado verde)

---

## ⚙️ CONFIGURACIÓN POST-DEPLOY

### 1. Agregar Google Analytics (Opcional)

En tu `index.html`, antes de `</head>`, agrega:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Reemplaza `GA_ID` con tu ID de Google Analytics.

### 2. Configurar Email de Contacto

En `assets/js/api.js`, modifica:

```javascript
API.sendContact = async function(data) {
    // Cambiar este endpoint a tu servidor de email
    const response = await fetch('https://servicelnina-production.up.railway.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await response.json();
}
```

### 3. Actualizar Apps Dinámicamente

Cuando agregues nuevas apps a tu panel de Railway, el sitio las mostrará automáticamente.

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### Problema: "Domain already connected to another site"

**Solución:** 
1. Ve a **Domain settings** → **Remove domain**
2. Intenta agregar de nuevo

### Problema: "Sitio en blanco o error 404"

**Solución:**
1. En Netlify, ve a **Build & Deploy** → **Deply settings**
2. Asegúrate que la carpeta de publicación sea: `.` (punto)
3. Redeploy el sitio

### Problema: "Rutas no funcionan (/descargas, /licencias, etc)"

**Solución:**
Asegúrate que `_redirects` esté en la raíz de tu proyecto con:
```
/*  /index.html  200
```

### Problema: "Conexión a API rechazada (CORS)"

**Solución:**
El servidor de Railway debe permitir CORS. Verifica que en `server.js` tengas:
```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
```

---

## 📞 SOPORTE

Si tienes problemas con:
- **GitHub**: https://github.com/help
- **Netlify**: https://support.netlify.com
- **Tu Dominio**: Contacta a tu registrador

Para soporte técnico de SERVICELNINA:
- 📧 Email: caquegua1@gmail.com
- 💬 WhatsApp: +591 76547194

---

## ✅ CHECKLIST FINAL

Antes de decir que está completado:

- [ ] Sitio corriendo en `https://servicelnina.com.bo`
- [ ] Todas las rutas funcionan
- [ ] Los links de navegación funcionan
- [ ] Formulario de contacto funciona
- [ ] Apps se muestran desde la API
- [ ] Certificado HTTPS aparece (🔒)
- [ ] El diseño se ve bien en mobile
- [ ] Sin errores en la consola (F12)

---

## 🎉 ¡FELICITACIONES!

Tu sitio web profesional ya está en línea. Ahora puedes:

✅ Compartir `https://servicelnina.com.bo` con clientes
✅ Agregar el sitio a tu firma de email
✅ Compartir en redes sociales
✅ Usar como portafolio profesional

---

**Última actualización:** 2025
**Versión:** 1.0.0
**Estado:** ✅ LISTO PARA PRODUCCIÓN
