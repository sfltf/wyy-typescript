import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "../layout/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Index",
    component: Layout,
    redirect: "/",
    children: [
      {
        path: "/",
        component: () => import("@/views/findMusic/index.vue"),
        children: [
          {
            path: "/",
            component: () => import("@/views/findMusic/recommend/index.vue")
          }
        ]
      }
    ]
  }
];

const createRouter = () =>
  new VueRouter({
    // mode: 'history', // require service support
    routes: routes
  });

const router = createRouter();

export default router;
