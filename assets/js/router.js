// ===== SISTEMA DE ROUTING =====
class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
    }

    register(path, title, loadFn) {
        this.routes[path] = { title, loadFn };
    }

    async navigate(path) {
        if (!this.routes[path]) {
            path = '/';
        }

        const route = this.routes[path];

        // Actualizar título
        document.title = `${route.title} · SERVICELNINA`;

        // Ocultar todas las secciones
        document.querySelectorAll('section').forEach(el => {
            el.classList.remove('active');
        });

        // Activar sección
        const section = document.getElementById(path.substring(1) || 'inicio');
        if (section) {
            section.classList.add('active');
        }

        // Actualizar URL
        if (path !== this.currentRoute) {
            history.pushState({ path }, route.title, path === '/' ? '/' : path);
            this.currentRoute = path;
        }

        // Ejecutar función de carga
        if (route.loadFn) {
            await route.loadFn();
        }

        // Scroll al inicio
        window.scrollTo(0, 0);

        // Actualizar nav activo
        this.updateNavActive(path);
    }

    updateNavActive(path) {
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.route === path) {
                link.classList.add('active');
            }
        });
    }

    init() {
        // Manejar clic en enlaces
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-route]');
            if (link) {
                e.preventDefault();
                this.navigate(link.dataset.route);
            }
        });

        // Manejar botón back/forward
        window.addEventListener('popstate', (e) => {
            this.navigate(e.state?.path || '/');
        });

        // Ruta inicial
        this.navigate(window.location.pathname || '/');
    }
}

// Exportar
window.Router = Router;
