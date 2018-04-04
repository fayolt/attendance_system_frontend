import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './components/Login.vue'
import auth from './auth'

const requireAuth = (to, _from, next) => {
  if (!auth.authenticated()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
};

const afterAuth = (_to, from, next) => {
  if (auth.authenticated()) {
    next(from.path);
  } else {
    next();
  }
};

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: 'login', component: Login, beforeEnter: afterAuth},
    { path: '/', name: 'home', component: Home, beforeEnter: requireAuth },
    
    { path: '/about', name: 'about', component: About, beforeEnter: requireAuth},
    // { path: '/', component: main, beforeEnter: requireAuth },
    { path: '*', redirect: '/' }
  ]
})
