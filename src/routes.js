import React from 'react';

const routes = {
    Home: {
        name: 'Home',
        path: '/main',
        component: React.lazy(() =>
            import(
                './page/Home'
                )
        )
    },
    AuthRegister: {
        name: 'Register',
        path: '/register',
        component: React.lazy(() =>
            import(
                './page/Auth/Register'
                )
        )
    },
}

export default routes;