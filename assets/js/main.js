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

// ===== PÁGINA PRODUCTOS =====
async function loadProductos() {
    const container = document.getElementById('productos-grid');
    if (!container) return;

    container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

    try {
        const apps = await API.getApps();
        container.innerHTML = apps.slice(0, 3).map(app => `
            <div class="card">
                <div style="font-size: 2.5rem; margin-bottom: 1rem;">${app.icon}</div>
                <h3>${app.name}</h3>
                <p>${app.description}</p>
                <p style="font-size: 1.2rem; color: var(--blue); margin-top: 1rem; font-weight: bold;">${app.price}</p>
            </div>
        `).join('');
    } catch (error) {
        container.innerHTML = '<p class="text-center">Error al cargar productos</p>';
    }
}

// ===== PÁGINA SOLUCIONES =====
async function loadSoluciones() {
    // Ya está renderizada en el HTML
}

// ===== PÁGINA DESCARGAS =====
async function loadDescargas() {
    const container = document.getElementById('descargas-grid');
    if (!container) return;

    container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

    try {
        const apps = await API.getApps();

        container.innerHTML = apps.map((app, idx) => {
            const colors = [
                { primary: '#d4af37', secondary: '#0d1117', icon: '⚖️', mockup: 'estudio' },  // Estudio Jurídico - Dorado
                { primary: '#00d9ff', secondary: '#0d1117', icon: '🔬', mockup: 'lab' },  // Laboratorio Smart - Cian
                { primary: '#fbbf24', secondary: '#0d1117', icon: '🔧', mockup: 'tech' },  // Tecnobolivia - Amarillo
                { primary: '#a78bfa', secondary: '#0d1117', icon: '💼', mockup: 'service' },  // ServiceNina2 - Púrpura
                { primary: '#22c55e', secondary: '#0d1117', icon: '🛡️', mockup: 'police' },  // Gestor Inventario - Verde
                { primary: '#06b6d4', secondary: '#0d1117', icon: '💊', mockup: 'pharmacy' }   // Stock Farmacia - Cyan
            ];
            const color = colors[idx % colors.length];

            // Mockup HTML para cada app
            const mockups = {
                estudio: `<div class="mockup-frame" style="background: linear-gradient(135deg, ${color.primary}30 0%, ${color.primary}10 100%);">
                    <div style="display: grid; gap: 6px; padding: 8px;">
                        <div style="height: 4px; background: ${color.primary}; border-radius: 2px; width: 80%;"></div>
                        <div style="height: 3px; background: ${color.primary}40; border-radius: 2px;"></div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-top: 4px;">
                            <div style="height: 20px; background: ${color.primary}50; border-radius: 2px;"></div>
                            <div style="height: 20px; background: ${color.primary}30; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`,
                lab: `<div class="mockup-frame" style="background: linear-gradient(135deg, ${color.primary}30 0%, ${color.primary}10 100%);">
                    <div style="display: flex; gap: 4px; padding: 8px; height: 50px;">
                        <div style="flex: 1; background: ${color.primary}; border-radius: 3px;"></div>
                        <div style="flex: 1; background: ${color.primary}60; border-radius: 3px;"></div>
                        <div style="flex: 1; background: ${color.primary}30; border-radius: 3px;"></div>
                    </div>
                </div>`,
                tech: `<div class="mockup-frame" style="background: linear-gradient(135deg, ${color.primary}30 0%, ${color.primary}10 100%);">
                    <div style="padding: 8px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 3px;">
                            <div style="height: 15px; background: ${color.primary}; border-radius: 2px;"></div>
                            <div style="height: 15px; background: ${color.primary}70; border-radius: 2px;"></div>
                            <div style="height: 15px; background: ${color.primary}40; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`,
                service: `<div class="mockup-frame" style="background: linear-gradient(135deg, ${color.primary}30 0%, ${color.primary}10 100%);">
                    <div style="padding: 8px;">
                        <div style="width: 30px; height: 30px; background: conic-gradient(${color.primary} 0deg, ${color.primary}60 180deg, ${color.primary}30 360deg); border-radius: 50%; margin: 0 auto;"></div>
                    </div>
                </div>`,
                police: `<div class="mockup-frame" style="background: linear-gradient(135deg, ${color.primary}30 0%, ${color.primary}10 100%);">
                    <div style="padding: 8px; text-align: center;">
                        <div style="font-size: 24px; font-weight: bold; color: ${color.primary}; letter-spacing: 2px;">888</div>
                        <div style="font-size: 8px; color: ${color.primary}80;">ITEMS</div>
                    </div>
                </div>`,
                pharmacy: `<div class="mockup-frame" style="background: linear-gradient(135deg, ${color.primary}30 0%, ${color.primary}10 100%);">
                    <div style="padding: 8px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3px;">
                            <div style="height: 20px; background: ${color.primary}; border-radius: 2px;"></div>
                            <div style="height: 20px; background: ${color.primary}50; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`
            };

            // Preview especial para Estudio Jurídico
            const specialPreview = app.id === 1 ? `
                <div class="app-preview-banner" style="background: linear-gradient(135deg, ${color.primary}40 0%, ${color.primary}20 100%); padding: 2rem; border-radius: 12px; margin-bottom: 1.5rem; text-align: center; border: 2px solid ${color.primary}60;">
                    <div style="font-size: 4rem; margin-bottom: 0.5rem;">⚖️</div>
                    <div style="color: ${color.primary}; font-weight: 700; font-size: 1.1rem;">ESTUDIO JURÍDICO</div>
                    <div style="color: ${color.primary}80; font-size: 0.9rem; margin-top: 0.3rem;">LIBRE</div>
                    <div style="color: ${color.primary}; font-weight: 500; font-size: 0.85rem; margin-top: 1rem;">JUSTICIA • HONESTIDAD • ÉTICA</div>
                </div>
            ` : '';

            return `
                <div class="card-app" style="border-color: ${color.primary}40;">
                    ${specialPreview}
                    <div class="app-header" style="background: linear-gradient(135deg, ${color.primary}20 0%, ${color.primary}05 100%); border-bottom: 1px solid ${color.primary}40;">
                        <div class="app-icon-wrapper" style="color: ${color.primary};">
                            ${mockups[color.mockup]}
                            <div class="app-icon-badge">${app.icon}</div>
                        </div>
                        <div class="app-title">
                            <h3 style="color: ${color.primary};">${app.name}</h3>
                            <span class="version-tag" style="background: ${color.primary}20; color: ${color.primary};">v${app.version}</span>
                        </div>
                    </div>

                    <div class="app-body">
                        <p class="app-description">${app.description}</p>

                        <div class="app-price" style="background: linear-gradient(135deg, ${color.primary}15 0%, transparent 100%); border: 1px solid ${color.primary}30;">
                            <span class="price-amount" style="color: ${color.primary};">${app.price}</span>
                            <span class="price-trial">⭐ ${app.trial}</span>
                        </div>

                        <div class="app-info">
                            <div class="info-item">
                                <span class="info-label">📋 Requisitos:</span>
                                <span class="info-value">${app.requirements}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">🆘 Soporte:</span>
                                <span class="info-value">${app.support}</span>
                            </div>
                        </div>

                        <div class="app-features">
                            <p style="font-size: 0.9rem; color: #58a6ff; font-weight: 600; margin-bottom: 0.7rem;">✨ Características:</p>
                            <ul>
                                ${app.features.slice(0, 4).map(f => `<li style="color: ${color.primary};">✓ ${f}</li>`).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="app-footer">
                        <button class="btn btn-primary" onclick="downloadApp('${app.downloadUrl}')" style="background: linear-gradient(135deg, ${color.primary}, ${color.primary}dd);">
                            Descargar Ahora
                        </button>
                        <button class="btn btn-details" onclick="rentNow('${app.slug}', '${app.name}')" style="border-color: ${color.primary}; color: ${color.primary};">
                            Alquilar por Horas
                        </button>
                    </div>
                </div>
            `;
        }).join('');
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

// Función para alquilar herramienta
function rentNow(slug, name) {
    const message = `Hola, quiero alquilar acceso temporal a ${name}. ¿Cuáles son las opciones y precios disponibles?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/59176547194?text=${encodedMessage}`, '_blank');
}

// ===== PÁGINA ALQUILER =====
async function loadAlquiler() {
    const container = document.getElementById('alquiler-grid');
    if (!container) return;

    container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

    try {
        const rentals = await API.getRentals();

        container.innerHTML = rentals.map((rental, idx) => {
            const colors = [
                { primary: '#ff6b6b', secondary: '#0d1117', icon: '⚡' },
                { primary: '#4ecdc4', secondary: '#0d1117', icon: '📊' },
                { primary: '#95e1d3', secondary: '#0d1117', icon: '⚙️' },
                { primary: '#f38181', secondary: '#0d1117', icon: '🔌' },
                { primary: '#aa96da', secondary: '#0d1117', icon: '🔧' }
            ];
            const color = colors[idx % colors.length];

            return `
                <div class="card-app" style="border-color: ${color.primary}40;">
                    <div class="app-header" style="background: linear-gradient(135deg, ${color.primary}20 0%, ${color.primary}05 100%); border-bottom: 1px solid ${color.primary}40;">
                        <div class="app-icon-wrapper" style="color: ${color.primary};">
                            <div style="font-size: 3rem;">${rental.icon}</div>
                        </div>
                        <div class="app-title">
                            <h3 style="color: ${color.primary};">${rental.name}</h3>
                            <span class="version-tag" style="background: ${color.primary}20; color: ${color.primary};">${rental.duration}</span>
                        </div>
                    </div>

                    <div class="app-body">
                        <p class="app-description">${rental.description}</p>

                        <div class="app-price" style="background: linear-gradient(135deg, ${color.primary}15 0%, transparent 100%); border: 1px solid ${color.primary}30;">
                            <span class="price-amount" style="color: ${color.primary}; font-size: 1.5rem; font-weight: bold;">${rental.price}</span>
                            <span class="price-trial" style="color: ${color.primary}; font-size: 0.85rem;">Acceso temporal</span>
                        </div>
                    </div>

                    <div class="app-footer">
                        <button class="btn btn-primary" onclick="rentTool('${rental.slug}', '${rental.name}')" style="background: linear-gradient(135deg, ${color.primary}, ${color.primary}dd);">
                            Alquilar Ahora
                        </button>
                        <button class="btn btn-details" style="border-color: ${color.primary}; color: ${color.primary};">
                            Ver Detalles
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    } catch (error) {
        container.innerHTML = '<p class="text-center">Error al cargar herramientas</p>';
    }
}

function rentTool(slug, name) {
    alert(`Alquiler de ${name} iniciado. Contáctanos por WhatsApp para completar.`);
    window.open('https://wa.me/59176547194', '_blank');
}

// ===== PÁGINA REVENDEDORES =====
async function loadRevendedores() {
    const resellerId = localStorage.getItem('reseller_id');

    if (resellerId) {
        // Ya está registrado - mostrar dashboard
        showResellerDashboard();
    } else {
        // Mostrar formulario de registro
        const form = document.getElementById('reseller-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const data = {
                id: 'RES-' + Date.now(),
                nombre: form.nombre.value,
                email: form.email.value,
                whatsapp: form.whatsapp.value,
                pais: form.pais.value,
                empresa: form.empresa.value,
                fechaRegistro: new Date().toLocaleString('es-BO'),
                ventas: 0,
                comisionTotal: 0,
                pedidos: []
            };

            // Guardar en localStorage
            localStorage.setItem('reseller_id', data.id);
            localStorage.setItem('reseller_data', JSON.stringify(data));

            // Crear mensaje para WhatsApp
            const mensaje = `🤝 NUEVA SOLICITUD DE REVENDEDOR:\n\n` +
                `ID: ${data.id}\n` +
                `👤 Nombre: ${data.nombre}\n` +
                `📧 Email: ${data.email}\n` +
                `📱 WhatsApp: ${data.whatsapp}\n` +
                `🌍 País: ${data.pais}\n` +
                `🏢 Empresa: ${data.empresa}\n\n` +
                `⏰ Fecha: ${data.fechaRegistro}`;

            const encodedMessage = encodeURIComponent(mensaje);
            const whatsappUrl = `https://wa.me/59176547194?text=${encodedMessage}`;

            alert('✅ Cuenta creada exitosamente.\n\nSerás contactado próximamente.');
            window.open(whatsappUrl, '_blank');

            // Recargar para mostrar dashboard
            setTimeout(() => location.reload(), 1000);
        });
    }
}

function showResellerDashboard() {
    const container = document.getElementById('revendedores');
    const data = JSON.parse(localStorage.getItem('reseller_data'));

    if (!container) return;

    container.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2>Mi Dashboard de Revendedor</h2>
                <p>Bienvenido ${data.nombre} 👋</p>
            </div>

            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                <div class="card" style="background: linear-gradient(135deg, var(--gold)20 0%, var(--blue)20 100%); border: 2px solid var(--gold);">
                    <h4 style="color: var(--gold);">📊 ID de Revendedor</h4>
                    <p style="font-size: 1.3rem; font-weight: bold; margin-top: 1rem;">${data.id}</p>
                </div>
                <div class="card" style="background: linear-gradient(135deg, #22c55e20 0%, var(--blue)20 100%); border: 2px solid #22c55e;">
                    <h4 style="color: #22c55e;">💰 Comisión Total</h4>
                    <p style="font-size: 1.3rem; font-weight: bold; margin-top: 1rem;">$${data.comisionTotal.toFixed(2)} USD</p>
                </div>
                <div class="card" style="background: linear-gradient(135deg, #00d9ff20 0%, var(--blue)20 100%); border: 2px solid #00d9ff;">
                    <h4 style="color: #00d9ff;">📈 Total Ventas</h4>
                    <p style="font-size: 1.3rem; font-weight: bold; margin-top: 1rem;">${data.ventas} pedidos</p>
                </div>
                <div class="card" style="background: linear-gradient(135deg, #fbbf2420 0%, var(--blue)20 100%); border: 2px solid #fbbf24;">
                    <h4 style="color: #fbbf24;">📅 Registrado</h4>
                    <p style="font-size: 0.95rem; margin-top: 1rem;">${data.fechaRegistro}</p>
                </div>
            </div>

            <div class="grid-2">
                <div class="card">
                    <h3>📝 Mis Datos</h3>
                    <div style="margin-top: 1.5rem;">
                        <p><strong>Nombre:</strong> ${data.nombre}</p>
                        <p style="margin-top: 0.5rem;"><strong>Email:</strong> ${data.email}</p>
                        <p style="margin-top: 0.5rem;"><strong>WhatsApp:</strong> ${data.whatsapp}</p>
                        <p style="margin-top: 0.5rem;"><strong>País:</strong> ${data.pais}</p>
                        <p style="margin-top: 0.5rem;"><strong>Empresa:</strong> ${data.empresa}</p>
                        <button class="btn btn-primary" style="margin-top: 1.5rem; width: 100%;" onclick="editResellerProfile()">
                            ✏️ Editar Perfil
                        </button>
                    </div>
                </div>

                <div class="card">
                    <h3>🛒 Hacer Nuevo Pedido</h3>
                    <div style="margin-top: 1.5rem;">
                        <p style="color: #999; margin-bottom: 1rem;">Selecciona los productos que deseas vender:</p>
                        <button class="btn btn-primary" style="width: 100%; margin-bottom: 0.5rem;" onclick="makeOrder('descargas')">
                            📦 Productos Permanentes
                        </button>
                        <button class="btn btn-primary" style="width: 100%; margin-bottom: 0.5rem;" onclick="makeOrder('alquiler')">
                            ⏰ Herramientas de Alquiler
                        </button>
                        <button class="btn btn-primary" style="width: 100%;" onclick="contactSupport()">
                            💬 Contactar Soporte
                        </button>
                    </div>
                </div>
            </div>

            <div class="card" style="margin-top: 2rem;">
                <h3>💼 Programa de Comisiones</h3>
                <div style="margin-top: 1.5rem;">
                    <p style="margin-bottom: 0.5rem;">📦 <strong>Descargas Permanentes:</strong> <span style="color: var(--gold);">+$20-30 por venta</span></p>
                    <p style="margin-bottom: 0.5rem;">⏰ <strong>Alquiler Temporal:</strong> <span style="color: var(--gold);">+$5-15 por venta</span></p>
                    <p>📅 <strong>Planes Anuales:</strong> <span style="color: var(--gold);">+$40-50 por venta</span></p>
                </div>
            </div>

            <button class="btn btn-details" style="margin-top: 2rem; width: 100%; color: #ff6b6b; border-color: #ff6b6b;" onclick="logoutReseller()">
                🚪 Cerrar Sesión
            </button>
        </div>
    `;
}

function makeOrder(type) {
    const data = JSON.parse(localStorage.getItem('reseller_data'));
    const message = `Hola, soy revendedor (${data.id}). Quiero hacer un pedido de ${type === 'descargas' ? 'productos permanentes' : 'herramientas de alquiler'}. ¿Cuáles son las opciones disponibles?`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/59176547194?text=${encoded}`, '_blank');
}

function editResellerProfile() {
    alert('Función disponible próximamente. Por ahora, contacta a soporte vía WhatsApp.');
}

function contactSupport() {
    const data = JSON.parse(localStorage.getItem('reseller_data'));
    const message = `Hola, soy ${data.nombre} (ID: ${data.id}). Necesito soporte.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/59176547194?text=${encoded}`, '_blank');
}

function logoutReseller() {
    if (confirm('¿Seguro que deseas cerrar sesión?')) {
        localStorage.removeItem('reseller_id');
        localStorage.removeItem('reseller_data');
        location.reload();
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

// ===== FUNCIONES DE PAGO =====
function openPaymentModal() {
    document.getElementById('paymentModal').classList.add('active');
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    const modal = document.getElementById('paymentModal');
    if (e.target === modal) {
        closePaymentModal();
    }
});

// ===== INICIALIZAR =====
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar partículas
    initParticles();

    // Crear router
    window.router = new Router();

    // Registrar rutas
    router.register('/', 'Inicio', loadInicio);
    router.register('/productos', 'Productos', loadProductos);
    router.register('/soluciones', 'Soluciones', loadSoluciones);
    router.register('/descargas', 'Descargas', loadDescargas);
    router.register('/alquiler', 'Alquiler', loadAlquiler);
    router.register('/revendedores', 'Revendedores', loadRevendedores);
    router.register('/licencias', 'Licencias', loadLicencias);
    router.register('/soporte', 'Soporte', loadSoporte);
    router.register('/contacto', 'Contacto', loadContacto);

    // Inicializar router
    router.init();

    // Inicializar nav
    initNav();
});
