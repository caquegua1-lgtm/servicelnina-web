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
            price: "$31 - $51 USD",
            trial: "Planes flexibles - Activación automática",
            features: [
                "📅 1 Year License: $50.91 USD",
                "🔄 6 Months: $40.81 USD",
                "🔄 3 Months: $31.21 USD",
                "⚙️ Administración centralizada AUTO API"
            ],
            icon: "⚙️",
            clients: 0,
            version: "v2.4.1.7",
            requirements: "Windows 7+, 800MB espacio",
            support: "Soporte técnico prioritario - OFFICIAL RESELLER",
            downloadUrl: "https://servicelnina-production.up.railway.app/descargas/tsm-tool/TSM_SetupV2.4.1.7z",
            plans: [
                { name: "TSM Tool Pro 1 Year [AUTO API]", period: "1 YEAR", price: "$50.91 USD" },
                { name: "TSM Tool Pro 6 Months [AUTO API]", period: "6 MONTHS", price: "$40.81 USD" },
                { name: "TSM Tool Pro 3 Months [AUTO API]", period: "3 MONTHS", price: "$31.21 USD" }
            ]
        }
    ],

    // Herramientas de alquiler - Precios finales (100% markup)
    rentals: [
        { id: 101, name: "TR Tool Rent (24h)", slug: "tr-tool-rent", description: "Acceso por 24 horas", duration: "24 Hours", price: "$3.00 USD", icon: "🔧", type: "rent" },
        { id: 102, name: "MobileSea Tool [MST] (6h)", slug: "mobilesea-rent", description: "Acceso por 6 horas", duration: "6 Hours", price: "$0.90 USD", icon: "📱", type: "rent" },
        { id: 103, name: "TSM-Tools Rent (3h)", slug: "tsm-rent-3h", description: "Acceso por 3 horas", duration: "3 Hours", price: "$0.80 USD", icon: "⚙️", type: "rent" },
        { id: 104, name: "TFM Tool Rent (6h)", slug: "tfm-tool-rent", description: "Acceso por 6 horas", duration: "6 Hours", price: "$0.80 USD", icon: "🔧", type: "rent" },
        { id: 105, name: "UNLOCK TOOL RENT (6h)", slug: "unlock-tool-rent", description: "Acceso por 6 horas", duration: "6 Hours", price: "$0.60 USD", icon: "🔓", type: "rent" },
        { id: 106, name: "Kg Killer Tool (6h)", slug: "kg-killer-rent", description: "Acceso por 6 horas", duration: "6 Hours", price: "$2.00 USD", icon: "⚡", type: "rent" },
        { id: 107, name: "MDM FIX TOOL (6h)", slug: "mdm-fix-rent", description: "Acceso por 6 horas", duration: "6 Hours", price: "$2.40 USD", icon: "🛠️", type: "rent" },
        { id: 108, name: "Griffin-Unlocker (6h)", slug: "griffin-unlocker-rent", description: "Acceso por 6 horas", duration: "6 Hours", price: "$3.90 USD", icon: "🔓", type: "rent" },
        { id: 109, name: "Hydra Tool (12h)", slug: "hydra-tool-rent", description: "Acceso por 12 horas", duration: "12 Hours", price: "$2.00 USD", icon: "🌊", type: "rent" },
        { id: 110, name: "DFT Pro Tool (45h)", slug: "dft-pro-rent-45h", description: "Acceso por 45 horas", duration: "45 Hours", price: "$2.80 USD", icon: "📊", type: "rent" },
        { id: 111, name: "Android Multitool (2h)", slug: "android-multitool-rent", description: "Acceso por 2 horas", duration: "2 Hours", price: "$0.60 USD", icon: "🤖", type: "rent" },
        { id: 112, name: "CF Tools (12h)", slug: "cf-tools-rent", description: "Acceso por 12 horas", duration: "12 Hours", price: "$0.80 USD", icon: "📱", type: "rent" },
        { id: 113, name: "AndroidWinTool (48h)", slug: "androidwintool-rent", description: "Acceso por 48 horas", duration: "48 Hours", price: "$2.80 USD", icon: "🤖", type: "rent" },
        { id: 114, name: "RTC Tool RENT (6h)", slug: "rtc-tool-rent", description: "Acceso por 6 horas", duration: "6 Hours", price: "$2.00 USD", icon: "⚙️", type: "rent" },
        { id: 115, name: "Pandora Tool (48h)", slug: "pandora-tool-rent", description: "Acceso por 48 horas", duration: "48 Hours", price: "$27.00 USD", icon: "🎭", type: "rent" },
        { id: 116, name: "Arab FRP Tool (2h)", slug: "arab-frp-rent", description: "Acceso por 2 horas", duration: "2 Hours", price: "$0.80 USD", icon: "📱", type: "rent" },
        { id: 117, name: "APIZU MDM TOOL (4h)", slug: "apizu-mdm-rent", description: "Acceso por 4 horas", duration: "4 Hours", price: "$2.40 USD", icon: "🛠️", type: "rent" },
        { id: 118, name: "AnonySHU Tool (12h)", slug: "anonyoshu-rent", description: "Acceso por 12 horas", duration: "12 Hours", price: "$4.00 USD", icon: "🔐", type: "rent" },
        { id: 119, name: "CP-Tool CPT Pro (12h)", slug: "cp-tool-rent", description: "Acceso por 12 horas", duration: "12 Hours", price: "$4.40 USD", icon: "⚡", type: "rent" },
        { id: 120, name: "Samsungtool kg Bypass (12h)", slug: "samsungtool-bypass-rent", description: "Acceso por 12 horas", duration: "12 Hours", price: "$7.00 USD", icon: "📱", type: "rent" },
        { id: 121, name: "Samsungtool +10c (12h)", slug: "samsungtool-10c-rent", description: "Acceso por 12 horas", duration: "12 Hours", price: "$26.00 USD", icon: "📱", type: "rent" },
        { id: 122, name: "Sigma plus box (30min)", slug: "sigma-plus-box-rent", description: "Acceso por 30 minutos", duration: "30 Minutes", price: "$4.00 USD", icon: "📦", type: "rent" },
        { id: 123, name: "Octopus Samsung (30min)", slug: "octopus-samsung-rent", description: "Acceso por 30 minutos", duration: "30 Minutes", price: "$5.00 USD", icon: "🐙", type: "rent" },
        { id: 124, name: "Octoplus LG (30min)", slug: "octoplus-lg-rent", description: "Acceso por 30 minutos", duration: "30 Minutes", price: "$4.00 USD", icon: "🐙", type: "rent" },
        { id: 125, name: "Oppo/Realme Token", slug: "oppo-token-rent", description: "Desencriptación de token", duration: "Lifetime", price: "$20.00 USD", icon: "📲", type: "rent" }
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
