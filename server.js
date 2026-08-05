const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;

// Cargar apps desde JSON
let appsCache = null;
function loadApps() {
    try {
        const appsPath = path.join(__dirname, 'apps-sync.json');
        const data = fs.readFileSync(appsPath, 'utf8');
        appsCache = JSON.parse(data);
        console.log(`✅ ${appsCache.apps.length} aplicaciones cargadas desde apps-sync.json`);
        return appsCache;
    } catch (err) {
        console.error('❌ Error cargando apps:', err.message);
        return { apps: [] };
    }
}

const server = http.createServer((req, res) => {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Manejar OPTIONS
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // ENDPOINT: GET /api/apps - Retorna todas las aplicaciones
    if (pathname === '/api/apps' && req.method === 'GET') {
        const apps = loadApps();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(apps));
        return;
    }

    // ENDPOINT: GET /api/apps/:id - Retorna una app específica
    if (pathname.match(/^\/api\/apps\/\d+$/) && req.method === 'GET') {
        const appId = parseInt(pathname.split('/')[3]);
        const apps = loadApps();
        const app = apps.apps.find(a => a.id === appId);

        if (app) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(app));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'App no encontrada' }));
        }
        return;
    }

    // ENDPOINT: GET /descargas/:slug/:filename - Info de descarga
    if (pathname.match(/^\/descargas\//) && req.method === 'GET') {
        const parts = pathname.split('/');
        const slug = parts[2];
        const filename = parts[3];

        const apps = loadApps();
        const app = apps.apps.find(a => a.slug === slug);

        if (app) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: true,
                app: app,
                downloadUrl: app.downloadUrl
            }));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Aplicación no encontrada' }));
        }
        return;
    }

    // ARCHIVOS ESTÁTICOS
    let filePath = pathname === '/' ? '/index.html' : pathname;
    filePath = path.join(__dirname, filePath);

    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf'
    };

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'text/plain';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // SPA: servir index.html para rutas no encontradas
                fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
                    if (err) {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end('404 - Página no encontrada');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(data);
                    }
                });
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('500 - Error del servidor');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  ✨ SERVICELNINA - Servidor en línea                     ║
║                                                            ║
║  🌐 http://localhost:${PORT}                              ║
║                                                            ║
║  📍 Rutas disponibles:                                    ║
║     / (inicio)                                            ║
║     /descargas                                            ║
║     /licencias                                            ║
║     /soporte                                              ║
║     /contacto                                             ║
║                                                            ║
║  📡 Endpoints API:                                        ║
║     GET /api/apps - Todas las apps (JSON)               ║
║     GET /api/apps/:id - App específica                  ║
║     GET /descargas/:slug/:file - Info descarga          ║
║                                                            ║
║  Presiona Ctrl+C para detener                            ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
    `);
});
