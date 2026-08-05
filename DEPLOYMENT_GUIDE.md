# 🚀 GUÍA DE DEPLOYMENT - SERVICELNINA.COM

## 📋 REQUISITOS PREVIOS

- ✅ Cuenta GitHub (gratis)
- ✅ Cuenta Cloudflare (gratis)
- ✅ Dominio (comprado: Namecheap, GoDaddy, etc)
- ✅ Node.js instalado en tu computadora

---

## ⚡ PASO A PASO (30 minutos)

### **PASO 1: Comprar Dominio (5 minutos)**

**Opción A: Namecheap (Recomendado - $8.88/año)**
```
1. Ve a: https://www.namecheap.com
2. Busca: servicelnina.com
3. Añade al carrito
4. Checkout con email + contraseña
5. Paga con Card o PayPal
6. Guarda los datos de acceso
```

**Opción B: Cloudflare ($8.99/año)**
```
1. Ve a: https://www.cloudflare.com/products/registrar/
2. Busca: servicelnina.com
3. Compra directamente
4. Más fácil (integración automática)
```

---

### **PASO 2: Crear Repositorio GitHub (5 minutos)**

```bash
# En tu computadora, en la carpeta actual:

# 1. Inicializar git (si no está ya)
git init

# 2. Agregar los archivos
git add .

# 3. Hacer primer commit
git commit -m "Initial commit - ServicelNina web app"

# 4. Crear rama main si no existe
git branch -M main
```

**En la Web:**
```
1. Ve a: https://github.com/new
2. Repository name: servicelnina-web
3. Description: Plataforma profesional de servicio técnico
4. Public (IMPORTANTE)
5. Create repository
6. Copia el comando que aparece:
   git remote add origin https://github.com/[tu-usuario]/servicelnina-web.git
   git branch -M main
   git push -u origin main
```

---

### **PASO 3: Conectar a Cloudflare Pages (5 minutos)**

```
1. Ve a: https://dash.cloudflare.com
2. Registrate con email + contraseña
3. Haz clic en "Pages"
4. Haz clic en "Create Project"
5. Conecta GitHub (autoriza)
6. Selecciona: servicelnina-web
7. Configuración de build:
   - Production branch: main
   - Build command: npm run build
   - Build output directory: dist
8. Haz clic en "Save and Deploy"
9. Espera 2-3 minutos a que termine el deploy
10. Tu sitio está en: https://servicelnina-web.pages.dev
```

---

### **PASO 4: Conectar Dominio (10 minutos)**

**Si compraste en Namecheap:**
```
1. En Cloudflare:
   - Pages > servicelnina-web
   - Settings > Custom Domains
   - Añade: servicelnina.com
   - Añade también: www.servicelnina.com
   - Verifica (debe aparecer un check verde)

2. En Namecheap:
   - Manage > Domain List
   - Selecciona: servicelnina.com
   - Nameservers tab
   - Cambia a Custom DNS:
     * NS1: [Copia de Cloudflare]
     * NS2: [Copia de Cloudflare]
   - Guarda cambios
   - Espera 24-48 horas
```

**Si compraste en Cloudflare:**
```
1. Automático (ya está conectado)
2. Sólo agrega en Pages > Custom Domains
3. Listo en minutos
```

---

### **PASO 5: Verificar que funciona**

```
1. Espera 24-48 horas después de cambiar nameservers
2. Ve a: https://servicelnina.com
3. Deberías ver la página del sitio
4. Si ves error, espera más tiempo (DNS se propaga lentamente)
```

---

## 🔄 FLUJO DE ACTUALIZACIONES FUTURAS

Cada vez que hagas cambios:

```bash
# 1. Haz cambios en el código
# 2. Comprueba que funciona localmente
npm run dev

# 3. Cuando esté listo:
git add .
git commit -m "Descripción de cambios"
git push origin main

# 4. Cloudflare Pages se actualizará automáticamente en 2-3 minutos
# 5. Tu sitio estará actualizado en: https://servicelnina.com
```

---

## 🖥️ INSTALAR DEPENDENCIAS (Primera vez)

```bash
# En tu terminal, en la carpeta del proyecto:
npm install

# Probar en local:
npm run dev
# Se abrirá en: http://localhost:5173

# Compilar para producción:
npm run build
```

---

## 📊 COSTO TOTAL

| Elemento | Costo | Período |
|----------|-------|---------|
| Dominio (.com) | $8.88 | Anual |
| Hosting (Cloudflare) | $0 | Gratis |
| Email (Zoho) | $0 | Gratis |
| **TOTAL** | **$8.88** | **Por año** |

---

## ✅ CHECKLIST FINAL

- [ ] Dominio comprado
- [ ] Repositorio GitHub creado
- [ ] Código pushed a GitHub
- [ ] Cloudflare Pages conectado
- [ ] Build automático funcionando
- [ ] Dominio apuntando a Cloudflare
- [ ] Sitio accesible en servicelnina.com
- [ ] SSL/TLS activado (automático)

---

## 🆘 TROUBLESHOOTING

### **"La página no carga"**
- Espera 24-48 horas después de cambiar nameservers
- Ve a: https://dnschecker.org y verifica que los nameservers estén correctos

### **"Veo error 404"**
- Verifica que el build command sea: `npm run build`
- Verifica que el output directory sea: `dist`
- Intenta hacer push nuevamente

### **"El dominio funciona pero no es seguro"**
- Espera unos minutos
- Cloudflare genera el certificado SSL automáticamente

---

## 📞 CONTACTO & SOPORTE

Si tienes problemas:
1. Revisa la documentación de Cloudflare: https://developers.cloudflare.com/pages/
2. Revisa la documentación de Vite: https://vitejs.dev/

---

**¡Listo! Tu sitio estará en línea en menos de 1 hora.** 🚀

