import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BurnView from '../views/BurnView.vue'
import DistanceView from '../views/DistanceView.vue'
import OverHeightView from '../views/OverHeightView.vue'
import PulseView from '../views/PulseView.vue'
import WeightView from '../views/WeightView.vue'
import EditProfileView from '../views/EditProfileView.vue'
import ThanksView from '../views/ThanksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/burn',
      name: 'burn',
      component: BurnView
    },
    {
      path: '/distance',
      name: 'distance',
      component: DistanceView
    },
    {
      path: '/weight',
      name: 'weight',
      component: WeightView
    },
    {
      path: '/pulse',
      name: 'pulse',
      component: PulseView
    },
    {
      path: '/overheight',
      name: 'overheight',
      component: OverHeightView
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditProfileView
    },
    {
      path: '/nioce',
      name: 'nioce',
      component: ThanksView
    },
  ]
})

export default router
