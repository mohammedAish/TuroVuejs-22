import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Testimonials from "../views/Testimonials.vue";
import Blog from "../views/Blog.vue";
import Tutorialss from "../views/Tutorialss.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Tutorial_single from "../views/Tutorial_single.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tutorialss",
    name: "Tutorialss",
    component: Tutorialss
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/tutorial_single",
    name: "Tutorial_single",
    component: Tutorial_single
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
