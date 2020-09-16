import Vue from 'vue'
import VueRouter from 'vue-router'
import CarDetails from '../pages/CarDetails.vue'
import Cars from '../pages/Cars.vue'
import Houses from '../pages/Houses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetails
  },
  {
    path: '/houses',
    name: 'Houses',
   component: Houses
  },
  {
    path: '*',
    redirect: '/cars'
  }
]

const router = new VueRouter({
  routes
})

export default router
