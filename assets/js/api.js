// ===== API CLIENTE =====
const API = {
    // URL base de tu servidor Railway
    baseURL: 'https://servicelnina-production.up.railway.app',

    // Datos de ejemplo (mientras conectamos con la API real)
    apps: [
        {
            id: 1,
            name: 'Estudio Jurídico Carrasco',
            description: 'Sistema completo de gestión para bufetes jurídicos',
            details: 'Gestiona todos los aspectos de tu estudio jurídico con este software profesional. Diseñado específicamente para abogados y despachos legales.',
            price: '$40 USD',
            trial: '30 días gratis - Activación única',
            features: ['Gestión de casos', 'Control de documentos', 'Facturación', 'Reportes', 'Seguimiento de plazos', 'Gestión de clientes'],
            icon: '⚖️',
            clients: 6,
            version: 'v2.1.1',
            requirements: 'Windows 7+, 500MB espacio, conexión internet',
            support: 'Email y WhatsApp 24/7',
            downloadUrl: 'https://servicelnina-production.up.railway.app/descargas/estudio-juridico-carrasco/EstudioJuridico-Setup-2.1.1.exe'
        },
        {
            id: 2,
            name: 'LABORATORIO SMART',
            description: 'Software de laboratorio con análisis y reportes',
            details: 'Plataforma completa para laboratorios de análisis con gestión de muestras, resultados y reportes profesionales.',
            price: '$40 USD',
            trial: '30 días gratis - Activación única',
            features: ['Análisis digital', 'Reportes automáticos', 'Bases de datos seguras', 'Control de muestras', 'Exportación PDF', 'Historial completo'],
            icon: '🔬',
            clients: 1,
            version: 'v1.7.0',
            requirements: 'Windows XP+, 1GB RAM, impresora',
            support: 'Soporte técnico prioritario',
            downloadUrl: 'https://servicelnina-production.up.railway.app/descargas/laboratorio-smart/LaboratorioSmart-Setup-1.7.0.exe'
        },
        {
            id: 3,
            name: 'Tecnobolivia Manager',
            description: 'Gestor de talleres y mantenimiento automotriz',
            details: 'Software profesional para administrar talleres mecánicos, servicios automotrices y mantenimiento de flota vehicular con eficiencia.',
            price: '$40 USD',
            trial: '30 días gratis - Activación única',
            features: ['Control de vehículos', 'Órdenes de trabajo', 'Inventario de partes', 'Facturación', 'Clientes registrados', 'Historial de servicios'],
            icon: '🔧',
            clients: 2,
            version: 'v2.4.0',
            requirements: 'Windows 7+, 800MB espacio',
            support: 'Asistencia técnica vía WhatsApp',
            downloadUrl: 'https://servicelnina-production.up.railway.app/descargas/gestion-taller/TecnoBoliviaManager-Setup-2.4.0.exe'
        },
        {
            id: 4,
            name: 'ServiceNina2',
            description: 'Aplicación empresarial avanzada',
            details: 'Software integral para gestión empresarial con múltiples módulos integrados.',
            price: '$40 USD',
            trial: '30 días gratis - Activación única',
            features: ['Módulos integrados', 'Reporting', 'Análisis de datos', 'Seguridad avanzada'],
            icon: '💼',
            clients: 0,
            version: 'v2.0.0',
            requirements: 'Windows 7+, 1GB RAM',
            support: 'Soporte técnico disponible',
            downloadUrl: 'https://servicelnina-production.up.railway.app/descargas/servicenina2/ServiceNina2_v2.0.0.zip'
        },
        {
            id: 5,
            name: 'Gestor Inventario Policía Boliviana',
            description: 'Sistema de gestión de inventario especializado',
            details: 'Software especializado para administración de inventario institucional.',
            price: '$40 USD',
            trial: '30 días gratis - Activación única',
            features: ['Control de inventario', 'Reportes institucionales', 'Auditoría completa', 'Multi-usuario'],
            icon: '🛡️',
            clients: 0,
            version: 'v0.0.1',
            requirements: 'Windows 7+, 500MB espacio',
            support: 'Soporte técnico disponible',
            downloadUrl: 'https://servicelnina-production.up.railway.app/descargas/setup-gestorinventario-policiaboliviana/Setup-GestorInventario-PoliciaBoliviana.zip'
        },
        {
            id: 6,
            name: 'Stock Farmacia',
            description: 'Software especializado para farmacias',
            details: 'Sistema completo para farmacias con control de medicamentos, seguimiento de vencimientos, gestión de recetas médicas y reportes detallados.',
            price: '$40 USD',
            trial: '30 días gratis - Activación única',
            features: ['Control de medicamentos', 'Alerta de vencimientos', 'Gestión de recetas', 'Reportes de ventas', 'Registro de proveedores', 'Cálculo automático de ganancias'],
            icon: '💊',
            clients: 0,
            version: 'v1.0.0',
            requirements: 'Windows XP+, 500MB espacio',
            support: 'Asistencia técnica por email y teléfono',
            downloadUrl: 'https://servicelnina-production.up.railway.app/descargas/stock-farmacia/stock-farmacia.exe'
        }
    ],

    // Obtener todas las apps
    async getApps() {
        try {
            // Intentar obtener del servidor
            const response = await fetch(`${this.baseURL}/api/apps`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.log('API no disponible, usando datos locales');
        }

        // Usar datos locales si API falla
        return this.apps;
    },

    // Obtener app por ID
    async getApp(id) {
        const apps = await this.getApps();
        return apps.find(app => app.id == id);
    },

    // Descargar app
    async downloadApp(appId) {
        try {
            const response = await fetch(`${this.baseURL}/api/apps/${appId}/download`, {
                method: 'POST'
            });
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Error al descargar' };
        }
    },

    // Validar licencia
    async validateLicense(licenseKey) {
        try {
            const response = await fetch(`${this.baseURL}/api/licenses/validate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ key: licenseKey })
            });
            return await response.json();
        } catch (error) {
            return { valid: false };
        }
    },

    // Enviar contacto
    async sendContact(data) {
        try {
            const response = await fetch(`${this.baseURL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Error al enviar mensaje' };
        }
    },

    // Obtener tickets de soporte
    async getSupportTickets() {
        try {
            const response = await fetch(`${this.baseURL}/api/support/tickets`);
            return await response.json();
        } catch (error) {
            return [];
        }
    }
};

window.API = API;
