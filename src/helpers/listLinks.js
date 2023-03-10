const listLinks = [
    {
        title: 'Inicio',
        to: '/',
        slug: 'home',
        private: false,
    },
    {
        title: 'Destinos',
        to: '/sites',
        slug: 'sites',
        private: true
    },
    {
        title: 'Usuarios',
        to: '/user',
        slug: 'user',
        private: true
    },
    {
        title: 'Iniciar Sesión',
        to: 'auth/login',
        slug: 'login',
        private: false,
        publicOnly: true
    },
];

export { listLinks };
