import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home";
import OurStory from "@/views/OurStory";

Vue.use(VueRouter)

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/our-story", name: "Our Story", component: OurStory }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
