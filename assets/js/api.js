// ===== API CLIENTE SINCRONIZADO =====
const API = {
    // URL base de tu servidor Railway
    baseURL: 'https://servicelnina-production.up.railway.app',
    appsFile: '/apps-sync.json',

    // Cache de apps
    cachedApps: null,

    // Obtener todas las apps (sincronizadas)
    async getApps() {
        try {
            // Si ya tiene apps en caché, devolverlas
            if (this.cachedApps) {
                return this.cachedApps;
            }

            // Intentar obtener del servidor primero
            try {
                const response = await fetch(`${this.baseURL}/api/apps`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    this.cachedApps = data.apps || data;
                    console.log('✅ Apps sincronizadas desde servidor Railway');
                    return this.cachedApps;
                }
            } catch (error) {
                console.log('⚠️ No se pudo conectar con servidor, usando JSON local');
            }

            // Si falla, obtener del archivo JSON local
            const response = await fetch(this.appsFile);
            if (response.ok) {
                const data = await response.json();
                this.cachedApps = data.apps;
                console.log('✅ Apps cargadas desde archivo local');
                return this.cachedApps;
            }
        } catch (error) {
            console.error('❌ Error cargando apps:', error);
        }

        // Fallback: retornar array vacío
        return [];
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
