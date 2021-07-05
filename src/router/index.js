import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import OurStory from '@/views/OurStory'
import Ceremony from '@/views/Ceremony'
import Couple from '@/views/Couple'
import Engagement from '@/views/Engagement'
import Family from '@/views/Family'
import GettingReady from '@/views/GettingReady'
import Reception from '@/views/Reception'
import Videos from '@/views/Videos'
import Puppies from '@/views/Puppies'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/our-story', name: 'OurStory', component: OurStory },
  { path: '/ceremony', name: 'Ceremony', component: Ceremony },
  { path: '/couple', name: 'Couple', component: Couple },
  { path: '/engagement', name: 'Engagement', component: Engagement },
  { path: '/family', name: 'Family', component: Family },
  { path: '/getting-ready', name: 'GettingReady', component: GettingReady },
  { path: '/reception', name: 'Reception', component: Reception },
  { path: '/videos', name: 'Videos', component: Videos },
  { path: '/puppies', name: 'Puppies', component: Puppies }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
