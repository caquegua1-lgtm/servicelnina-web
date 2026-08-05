// ===== API CLIENTE CON APPS LOCALES =====
const API = {
    baseURL: 'https://servicelnina-production.up.railway.app',

    // Apps hardcodeadas como fallback
    apps: [
        {
            id: 1,
            name: "Estudio Jurídico",
            slug: "estudio-juridico-carrasco",
            description: "Sistema completo de gestión para bufetes jurídicos",
            details: "Gestiona todos los aspectos de tu estudio jurídico con este software profesional.",
            price: "$40 USD",
            trial: "30 días gratis - Activación única",
            features: ["Gestión de casos", "Control de documentos", "Facturación", "Reportes", "Seguimiento de plazos", "Gestión de clientes"],
            icon: "⚖️",
            clients: 6,
            version: "v2.1.1",
            requirements: "Windows 7+, 500MB espacio",
            support: "Email y WhatsApp 24/7",
            downloadUrl: "https://servicelnina-production.up.railway.app/descargas/estudio-juridico-carrasco/EstudioJuridico-Setup-2.1.1.exe",
            bgColor: "#d4af37",
            preview: "legal"
        },
        {
            id: 2,
            name: "LABORATORIO SMART",
            slug: "laboratorio-smart",
            description: "Software de laboratorio con análisis y reportes",
            details: "Plataforma completa para laboratorios de análisis con gestión de muestras.",
            price: "$40 USD",
            trial: "30 días gratis - Activación única",
            features: ["Análisis digital", "Reportes automáticos", "Bases de datos seguras", "Control de muestras", "Exportación PDF", "Historial completo"],
            icon: "🔬",
            clients: 1,
            version: "v1.7.0",
            requirements: "Windows XP+, 1GB RAM",
            support: "Soporte técnico prioritario",
            downloadUrl: "https://servicelnina-production.up.railway.app/descargas/laboratorio-smart/LaboratorioSmart-Setup-1.7.0.exe"
        },
        {
            id: 3,
            name: "Tecnobolivia Manager",
            slug: "gestion-taller",
            description: "Gestor de talleres y mantenimiento automotriz",
            details: "Software profesional para administrar talleres mecánicos.",
            price: "$40 USD",
            trial: "30 días gratis - Activación única",
            features: ["Control de vehículos", "Órdenes de trabajo", "Inventario de partes", "Facturación", "Clientes registrados", "Historial de servicios"],
            icon: "🔧",
            clients: 2,
            version: "v2.4.0",
            requirements: "Windows 7+, 800MB espacio",
            support: "Asistencia técnica vía WhatsApp",
            downloadUrl: "https://servicelnina-production.up.railway.app/descargas/gestion-taller/TecnoBoliviaManager-Setup-2.4.0.exe"
        },
        {
            id: 4,
            name: "ServiceNina2",
            slug: "servicenina2",
            description: "Aplicación empresarial avanzada",
            details: "Software integral para gestión empresarial con múltiples módulos.",
            price: "$40 USD",
            trial: "30 días gratis - Activación única",
            features: ["Módulos integrados", "Reporting", "Análisis de datos", "Seguridad avanzada"],
            icon: "💼",
            clients: 0,
            version: "v2.0.0",
            requirements: "Windows 7+, 1GB RAM",
            support: "Soporte técnico disponible",
            downloadUrl: "https://servicelnina-production.up.railway.app/descargas/servicenina2/ServiceNina2_v2.0.0.zip"
        },
        {
            id: 5,
            name: "Gestor Inventario Policía Boliviana",
            slug: "setup-gestorinventario-policiaboliviana",
            description: "Sistema de gestión de inventario especializado",
            details: "Software especializado para administración de inventario institucional.",
            price: "$40 USD",
            trial: "30 días gratis - Activación única",
            features: ["Control de inventario", "Reportes institucionales", "Auditoría completa", "Multi-usuario"],
            icon: "🛡️",
            clients: 0,
            version: "v0.0.1",
            requirements: "Windows 7+, 500MB espacio",
            support: "Soporte técnico disponible",
            downloadUrl: "https://servicelnina-production.up.railway.app/descargas/setup-gestorinventario-policiaboliviana/Setup-GestorInventario-PoliciaBoliviana.zip"
        },
        {
            id: 6,
            name: "Stock Farmacia",
            slug: "stock-farmacia",
            description: "Software especializado para farmacias",
            details: "Sistema completo para farmacias con control de medicamentos.",
            price: "$40 USD",
            trial: "30 días gratis - Activación única",
            features: ["Control de medicamentos", "Alerta de vencimientos", "Gestión de recetas", "Reportes de ventas", "Registro de proveedores", "Cálculo automático de ganancias"],
            icon: "💊",
            clients: 0,
            version: "v1.0.0",
            requirements: "Windows XP+, 500MB espacio",
            support: "Asistencia técnica por email y teléfono",
            downloadUrl: "https://servicelnina-production.up.railway.app/descargas/stock-farmacia/stock-farmacia.exe"
        },
        {
            id: 7,
            name: "CHIMERA TOOL",
            slug: "chimera-tool",
            description: "Herramienta profesional avanzada - OFFICIAL RESELLER",
            details: "Plataforma especializada para tareas técnicas profesionales con múltiples planes de activación.",
            price: "$105 - $192 USD",
            trial: "Planes flexibles - Activación por 1 año",
            features: [
                "💎 Basic: $105 USD (100 Devices)",
                "🏆 Premium: $192 USD (5000 Devices)",
                "👑 Professional: $153 USD (1500 Devices)",
                "⭐ Credits: $10 USD (Existing Users)"
            ],
            icon: "⚡",
            clients: 0,
            version: "v1",
            requirements: "Windows 10+, 500MB espacio",
            support: "Soporte técnico 24/7 - OFFICIAL RESELLER",
            downloadUrl: "https://servicelnina-production.up.railway.app/descargas/chimera-tool/ChimeraInstaller.exe",
            plans: [
                { name: "Basic (1 Year)", devices: "100 Devices", price: "$105 USD" },
                { name: "Premium (1 Year)", devices: "5000 Devices", price: "$192 USD" },
                { name: "Professional (1 Year)", devices: "1500 Devices", price: "$153 USD" },
                { name: "Credits (Existing Users)", devices: "Unlimited", price: "$10 USD" }
            ]
        },
        {
            id: 8,
            name: "DFT PRO TOOL",
            slug: "dft-pro-tool",
            description: "Software profesional DFT - OFFICIAL RESELLER",
            details: "Herramienta profesional para análisis y procesamiento avanzado.",
            price: "$81 USD",
            trial: "Activación por 1 año - OFFICIAL RESELLER",
            features: [
                "⚡ Procesamiento rápido profesional",
                "📊 Análisis profundo avanzado",
                "🔄 Múltiples exportaciones",
                "🛠️ Integración API completa"
            ],
            icon: "📊",
            clients: 0,
            version: "v8.0.0",
            requirements: "Windows 8+, 1GB RAM",
            support: "Soporte técnico especializado - OFFICIAL RESELLER",
            downloadUrl: "https://servicelnina-production.up.railway.app/descargas/dft-pro-tool/DFTPRO_v8.0.0.exe"
        },
        {
            id: 9,
            name: "EFT PRO TOOL",
            slug: "eft-pro-tool",
            description: "Herramienta profesional EFT - OFFICIAL RESELLER",
            details: "Software avanzado para procesamiento y análisis profesional sin dongle.",
            price: "$60 - $91 USD",
            trial: "Planes anuales - Activación automática",
            features: [
                "🆕 New User Without Dongle 1 Year: $91.38 USD",
                "♻️ Renewal Online Without Dongle 1 Year: $60.53 USD",
                "🔐 Procesamiento seguro avanzado",
                "📊 Interfaz profesional moderna"
            ],
            icon: "🔐",
            clients: 0,
            version: "v1",
            requirements: "Windows 7+, 500MB espacio",
            support: "Soporte técnico 24/7 - OFFICIAL RESELLER",
            downloadUrl: "https://servicelnina-production.up.railway.app/descargas/eft-pro-tool/update112.7z",
            plans: [
                { name: "EFT Pro Without Dongle (1 Year)", type: "NEW USER", price: "$91.38 USD" },
                { name: "EFT Pro Renewal Online (1 Year)", type: "RENEWAL", price: "$60.53 USD" }
            ]
        },
        {
            id: 10,
            name: "TSM TOOL",
            slug: "tsm-tool",
            description: "Sistema de administración TSM - OFFICIAL RESELLER",
            details: "Plataforma integral para administración y gestión avanzada con AUTO API.",
            price: "$31 - $76 USD",
            trial: "Planes flexibles - Activación automática",
            features: [
                "📅 1 Year License: $76.36 USD",
                "🔄 3 Months: $31.82 USD",
                "🔄 6 Months: $46.21 USD",
                "⚙️ Administración centralizada AUTO API"
            ],
            icon: "⚙️",
            clients: 0,
            version: "v2.4.1.7",
            requirements: "Windows 7+, 800MB espacio",
            support: "Soporte técnico prioritario - OFFICIAL RESELLER",
            downloadUrl: "https://servicelnina-production.up.railway.app/descargas/tsm-tool/TSM_SetupV2.4.1.7z",
            plans: [
                { name: "TSM Tool Pro 1 Year [AUTO API]", period: "1 YEAR", price: "$76.36 USD" },
                { name: "TSM Tool Pro 6 Months [AUTO API]", period: "6 MONTHS", price: "$46.21 USD" },
                { name: "TSM Tool Pro 3 Months [AUTO API]", period: "3 MONTHS", price: "$31.82 USD" }
            ]
        }
    ],

    // Herramientas de alquiler con +50% de ganancia
    rentals: [
        {
            id: 101,
            name: "EFT Pro Tool Rent",
            slug: "eft-pro-rent",
            description: "Alquiler de herramienta EFT profesional",
            duration: "1 Year",
            priceBase: 50.92,
            price: "$76.38 USD",
            icon: "⚡",
            type: "rent"
        },
        {
            id: 102,
            name: "DFT PRO Tool Rent",
            slug: "dft-pro-rent",
            description: "Alquiler anual de DFT PRO con AUTO API",
            duration: "1 Year",
            priceBase: 71.77,
            price: "$107.66 USD",
            icon: "📊",
            type: "rent"
        },
        {
            id: 103,
            name: "TSM Tool Pro Rent",
            slug: "tsm-pro-rent",
            description: "Acceso TSM Pro por 1 año con API automática",
            duration: "1 Year",
            priceBase: 40.91,
            price: "$61.36 USD",
            icon: "⚙️",
            type: "rent"
        },
        {
            id: 104,
            name: "USB Redirector 1 Year",
            slug: "usb-redirector-rent",
            description: "Redirección USB profesional anual",
            duration: "1 Year",
            priceBase: 58,
            price: "$87 USD",
            icon: "🔌",
            type: "rent"
        },
        {
            id: 105,
            name: "TR Tool Rent",
            slug: "tr-tool-rent",
            description: "Acceso a herramienta TR por 24 horas",
            duration: "24 Hours",
            priceBase: 1.5,
            price: "$2.25 USD",
            icon: "🔧",
            type: "rent"
        },
        {
            id: 106,
            name: "MDM FIX TOOL Rent",
            slug: "mdm-fix-rent",
            description: "Reparación MDM automática por 6 horas",
            duration: "6 Hours",
            priceBase: 1.2,
            price: "$1.80 USD",
            icon: "🛠️",
            type: "rent"
        },
        {
            id: 107,
            name: "Griffin Unlocker Rent",
            slug: "griffin-unlocker-rent",
            description: "Desbloqueo Griffin Premium por 6 horas",
            duration: "6 Hours",
            priceBase: 1.95,
            price: "$2.93 USD",
            icon: "🔓",
            type: "rent"
        },
        {
            id: 108,
            name: "Hydra Tool Rent",
            slug: "hydra-tool-rent",
            description: "Acceso Hydra sin dongle por 12 horas",
            duration: "12 Hours",
            priceBase: 1,
            price: "$1.50 USD",
            icon: "🌊",
            type: "rent"
        },
        {
            id: 109,
            name: "CF Tools Rent",
            slug: "cf-tools-rent",
            description: "Herramientas CF por 12 horas",
            duration: "12 Hours",
            priceBase: 0.4,
            price: "$0.60 USD",
            icon: "📱",
            type: "rent"
        },
        {
            id: 110,
            name: "AndroidWinTool MTK Rent",
            slug: "androidwintool-rent",
            description: "Herramienta Android (MTK/Qualcomm) por 48 horas",
            duration: "48 Hours",
            priceBase: 1.4,
            price: "$2.10 USD",
            icon: "🤖",
            type: "rent"
        },
        {
            id: 111,
            name: "Pandora Tool Rent",
            slug: "pandora-tool-rent",
            description: "Acceso Pandora profesional por 48 horas",
            duration: "48 Hours",
            priceBase: 20,
            price: "$30 USD",
            icon: "🎭",
            type: "rent"
        },
        {
            id: 112,
            name: "Sigma Plus Online Rent",
            slug: "sigma-plus-rent",
            description: "Sigma Plus acceso online por 7 días",
            duration: "7 Days",
            priceBase: 0,
            price: "$0 USD",
            icon: "Σ",
            type: "rent"
        },
        {
            id: 113,
            name: "AnonySHU Tool Rent",
            slug: "anonyoshu-rent",
            description: "Herramienta AnonySHU por 12 horas",
            duration: "12 Hours",
            priceBase: 2,
            price: "$3 USD",
            icon: "🔐",
            type: "rent"
        },
        {
            id: 114,
            name: "Oppo/Realme Token Tool",
            slug: "oppo-token-rent",
            description: "Desencriptación de token Oppo/Realme/OnePlus",
            duration: "Lifetime",
            priceBase: 10,
            price: "$15 USD",
            icon: "📲",
            type: "rent"
        },
        {
            id: 115,
            name: "Android Multitool Rent",
            slug: "android-multitool-rent",
            description: "Herramienta multifunción Android por 2 horas",
            duration: "2 Hours",
            priceBase: 0.3,
            price: "$0.45 USD",
            icon: "🛠️",
            type: "rent"
        }
    ],

    // Obtener todas las apps
    async getApps() {
        return this.apps;
    },

    // Obtener herramientas de alquiler
    async getRentals() {
        return this.rentals;
    },

    // Obtener app por ID
    async getApp(id) {
        return this.apps.find(app => app.id == id);
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
