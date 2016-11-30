
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */


Vue.component('form-input', require('./components/Input.vue'));
Vue.component('user-card', require('./components/UserCard.vue'));
Vue.component('user-navbar', require('./components/UserNavbar.vue'));
Vue.component('driver-route', require('./components/DriverRoute.vue'));
Vue.component('search-ride', require('./components/SearchRide.vue'));

const routes = [
  { path: '/', component: require('./components/LoginForm.vue') },
  { path: '/register', component: require('./components/RegisterForm.vue') },
   { path: '/home', component: require('./components/Home.vue') },
]

const router = new VueRouter({
  routes // short for routes: routes
})




const app = new Vue({
    router
}).$mount('#app')