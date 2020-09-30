require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';

Vue.use(VueRouter, VueAxios, Axios);

import App from './components/App.vue';
import Create from './components/Create.vue';
import Read from './components/Read.vue';
import Update from './components/Update.vue';
import Signin from './components/Signin.vue';
import User from './components/User.vue';
import store from './auth/store';

const routes = [
    {
        name: 'read',
        path: '/',
        component: Read
    },
    {
        name: 'create',
        path: '/create',
        component: Create
    },
    {
        name: 'update',
        path: '/detail/:id',
        component: Update
    },
    {
        name: 'signin',
        path: '/signin',
        component: Signin
    }, {
        name: 'user',
        path: '/user',
        component: User,
        meta: {
            requiresAuth: true
        }
    },
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        next("/signin");
    } else {
        next();
    }
});

Vue.prototype.$http = Axios;

const token = localStorage.getItem("token");
if (token)
    Vue.prototype.$http.defaults.headers.common["Authorization"] = token;

new Vue(Vue.util.extend({ router, store }, App)).$mount("#app");