import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
import { authGuard } from "@bcwdev/auth0-vue";
import BlogDetails from "../pages/BlogDetails.vue";
import CreatePost from "../pages/CreatePost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/:id",
    name: 'BlogDetails',
    component: BlogDetails
  },
  {
    path: "/new",
    name: "NewPost",
    component: CreatePost,
    beforeEnter: authGuard,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
