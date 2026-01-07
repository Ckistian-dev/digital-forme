import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Interceptor para adicionar o token de autenticação a cada requisição
api.interceptors.request.use(
    (config) => {
        // Prioriza o token do .env para a Landing Page, ou usa o do localStorage se disponível
        const token = import.meta.env.VITE_API_ACCESS_TOKEN || localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
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
            // Opcional: Redirecionar apenas se não estiver usando o token estático do .env
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;