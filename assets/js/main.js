// ===== CANVAS PARTÍCULAS =====
function initParticles() {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Crear partículas
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }

    // Loop de animación
    function animate() {
        ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Redimensionar
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===== INICIALIZAR NAV =====
function initNav() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const mobileToggle = document.querySelector('.nav-mobile-toggle');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const route = link.dataset.route;
            router.navigate(route);
        });
    });
}

// ===== PÁGINA INICIO =====
async function loadInicio() {
    // Ya está renderizada en el HTML
}

// ===== PÁGINA DESCARGAS =====
async function loadDescargas() {
    const container = document.getElementById('descargas-grid');
    if (!container) return;

    container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

    try {
        const apps = await API.getApps();

        container.innerHTML = apps.map(app => `
            <div class="card">
                <div style="font-size: 3rem; margin-bottom: 1rem;">${app.icon}</div>
                <h3>${app.name}</h3>
                <p style="color: #aaa; margin-bottom: 0.5rem;">${app.description}</p>
                <p style="font-size: 0.95rem; color: #999; margin-bottom: 1rem;">${app.details || ''}</p>
                <div style="margin: 1.5rem 0; padding: 1rem 0; border-top: 1px solid rgba(212, 175, 55, 0.2);">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span class="text-gold" style="font-size: 1.5rem; font-weight: bold;">${app.price}</span>
                        <span style="color: #999;">v${app.version}</span>
                    </div>
                    <div style="background: rgba(212, 175, 55, 0.1); padding: 0.5rem; border-radius: 4px; margin-bottom: 1rem; text-align: center; font-size: 0.9rem; color: var(--gold);">
                        ✨ ${app.trial}
                    </div>
                    <div style="margin-bottom: 1rem; padding: 0.5rem; background: rgba(100, 100, 100, 0.1); border-radius: 4px; font-size: 0.85rem; color: #ccc;">
                        <p style="margin: 0.3rem 0;"><strong style="color: var(--gold);">📋 Requisitos:</strong> ${app.requirements || 'Consulte con soporte'}</p>
                        <p style="margin: 0.3rem 0;"><strong style="color: var(--gold);">🆘 Soporte:</strong> ${app.support || 'Disponible 24/7'}</p>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <p style="font-size: 0.85rem; color: var(--gold); margin-bottom: 0.3rem;"><strong>Características principales:</strong></p>
                        <ul style="text-align: left; margin: 0; padding-left: 1.2rem;">
                            ${app.features.map(f => `<li style="margin-bottom: 0.4rem; color: var(--text-secondary); font-size: 0.9rem;">✓ ${f}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <button class="btn btn-primary" onclick="downloadApp('${app.downloadUrl}')">
                    Descargar Ahora
                </button>
                <button class="btn btn-secondary" style="margin-top: 0.5rem; width: 100%;">
                    Ver Detalles
                </button>
            </div>
        `).join('');
    } catch (error) {
        container.innerHTML = '<p class="text-center">Error al cargar aplicaciones</p>';
    }
}

// Función para descargar
function downloadApp(downloadUrl) {
    if (downloadUrl) {
        window.open(downloadUrl, '_blank');
    } else {
        alert('Link de descarga no disponible');
    }
}

// ===== PÁGINA LICENCIAS =====
async function loadLicencias() {
    // Placeholder
}

// ===== PÁGINA SOPORTE =====
async function loadSoporte() {
    const container = document.getElementById('soporte-content');
    if (!container) return;

    container.innerHTML = `
        <div class="grid">
            <div class="card">
                <h3>📧 Email</h3>
                <p>Contactanos a <strong>caquegua1@gmail.com</strong></p>
                <p style="font-size: 0.9rem; color: #999;">Respuesta en menos de 24 horas</p>
            </div>
            <div class="card">
                <h3>💬 WhatsApp</h3>
                <p>Soporte por WhatsApp</p>
                <p style="font-size: 1.2rem; font-weight: bold; color: var(--gold);">+591 76547194</p>
            </div>
            <div class="card">
                <h3>🌐 Web</h3>
                <p>Visita nuestro sitio web</p>
                <p style="font-size: 0.9rem;">www.servicelnina.com.bo</p>
            </div>
        </div>

        <div class="mt-4">
            <h2 style="color: var(--gold); margin-bottom: 2rem;">Preguntas Frecuentes</h2>
            <div class="card">
                <h4 style="color: var(--gold); margin-bottom: 0.5rem;">¿Cómo activo mi licencia?</h4>
                <p>Ingresa el código de licencia en la sección de Licencias de tu aplicación. Se activará automáticamente.</p>
            </div>
            <div class="card mt-4">
                <h4 style="color: var(--gold); margin-bottom: 0.5rem;">¿Qué pasa si se vence mi licencia?</h4>
                <p>Recibirás notificaciones. Puedes renovarla en cualquier momento sin perder tus datos.</p>
            </div>
            <div class="card mt-4">
                <h4 style="color: var(--gold); margin-bottom: 0.5rem;">¿Hay soporte técnico?</h4>
                <p>Sí, disponible 24/7 vía WhatsApp y Email para resolver tus dudas.</p>
            </div>
        </div>
    `;
}

// ===== PÁGINA CONTACTO =====
async function loadContacto() {
    const form = document.getElementById('contacto-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = {
            nombre: form.nombre.value,
            email: form.email.value,
            asunto: form.asunto.value,
            mensaje: form.mensaje.value
        };

        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando...';

        const result = await API.sendContact(data);

        if (result.success) {
            alert('¡Mensaje enviado exitosamente!');
            form.reset();
        } else {
            alert('Error al enviar: ' + result.message);
        }

        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Enviar Mensaje';
    });
}

// ===== INICIALIZAR =====
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar partículas
    initParticles();

    // Crear router
    window.router = new Router();

    // Registrar rutas
    router.register('/', 'Inicio', loadInicio);
    router.register('/descargas', 'Descargas', loadDescargas);
    router.register('/licencias', 'Licencias', loadLicencias);
    router.register('/soporte', 'Soporte', loadSoporte);
    router.register('/contacto', 'Contacto', loadContacto);

    // Inicializar router
    router.init();

    // Inicializar nav
    initNav();
});
