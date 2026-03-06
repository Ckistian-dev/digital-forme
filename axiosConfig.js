import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Interceptor para adicionar o token de autenticação a cada requisição
api.interceptors.request.use(
    async (config) => {
        // Evita loop se a requisição for para o endpoint de token
        if (config.url && config.url.includes('/auth/token')) {
            return config;
        }

        try {
            const email = import.meta.env.VITE_API_EMAIL;
            const password = import.meta.env.VITE_API_PASSWORD;

            if (email && password) {
                const formData = new FormData();
                formData.append('username', email);
                formData.append('password', password);

                // Gera um novo token para cada requisição
                const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/token`, formData, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });

                const token = response.data.access_token;
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
            }
        } catch (error) {
            console.error("Erro ao gerar token no interceptor:", error);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor para lidar com tokens expirados (erro 401)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Erro 401: Token inválido ou expirado.");
        }
        return Promise.reject(error);
    }
);

export default api;