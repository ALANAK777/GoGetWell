import axios from 'axios';

// Create an axios instance with default settings
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Example API for demonstration
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token, etc.
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('auth_token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add language header
    const language = localStorage.getItem('app_language');
    if (language) {
      config.headers['Accept-Language'] = language;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized globally
    if (error.response && error.response.status === 401) {
      // Clear local storage and redirect to login
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

// API service
const apiService = {
  // Expose the axios instance for direct access if needed
  axios: axiosInstance,
  
  // Users
  getUsers: () => axiosInstance.get('/users'),
  getUserById: (id: number) => axiosInstance.get(`/users/${id}`),
  createUser: (data: any) => axiosInstance.post('/users', data),
  updateUser: (id: number, data: any) => axiosInstance.put(`/users/${id}`, data),
  deleteUser: (id: number) => axiosInstance.delete(`/users/${id}`),
  
  // Posts
  getPosts: () => axiosInstance.get('/posts'),
  getPostById: (id: number) => axiosInstance.get(`/posts/${id}`),
  getPostComments: (id: number) => axiosInstance.get(`/posts/${id}/comments`),
  createPost: (data: any) => axiosInstance.post('/posts', data),
  updatePost: (id: number, data: any) => axiosInstance.put(`/posts/${id}`, data),
  deletePost: (id: number) => axiosInstance.delete(`/posts/${id}`),
  
  // Comments
  getComments: () => axiosInstance.get('/comments'),
  getCommentById: (id: number) => axiosInstance.get(`/comments/${id}`),
  createComment: (data: any) => axiosInstance.post('/comments', data),
  
  // Patient-specific API endpoints (mocked for demonstration)
  getPatientProfile: (id: number) => axiosInstance.get(`/users/${id}`),
  getPatientRecords: (id: number) => axiosInstance.get(`/users/${id}/posts`),
  getPatientAppointments: (id: number) => axiosInstance.get(`/users/${id}/todos`),
  scheduleAppointment: (data: any) => axiosInstance.post('/todos', data),
};

export default apiService; 