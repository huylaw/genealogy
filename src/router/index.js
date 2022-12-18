import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/login.vue'),
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/home.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('../views/member/listMember.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/relationship',
    name: 'relationship',
    component: () => import('../views/relationship/relationship.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/statistical',
    name: 'statistical',
    component: () => import('../views/statistical/statistical.vue'),
    meta: {
      requiresAuth: true,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // linkActiveClass: "active",
  // linkExactActiveClass: "exact-active"
})

router.beforeEach((to, from, next) => {
  if( to.meta && to.meta.layout && to.meta.layout == 'auth'){
    store.commit('setLayout', 'auth');
  }else{
    store.commit('setLayout', 'app');
  }
  if(to.meta &&  to.meta.requiresAuth && !localStorage.token){
    store.commit('setBeforePage', to);
    next({name: 'login'})
  }
  next(true);
});

export default router
