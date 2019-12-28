import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/layout/Layout.vue"),
    children: [
      {
        path: "dashboard",
        name: "首页",
        meta: {
          title: "首页"
        },
        component: () => import("../views/dashboard"),
        children: [
          {
            path: "dashboard1",
            name: "首页1",
            meta: {
              title: "首页1"
            },
            component: () => import("../views/dashboard")
          },
          {
            path: "dashboard2",
            name: "首页2",
            meta: {
              title: "首页2"
            },
            component: () => import("../views/dashboard"),
            children: [
              {
                path: "dashboard21",
                name: "首页21",
                meta: {
                  title: "首页21"
                },
                component: () => import("../views/dashboard")
              },
              {
                path: "dashboard22",
                name: "首页22",
                meta: {
                  title: "首页22"
                },
                component: () => import("../views/dashboard")
              }
            ]
          }
        ]
      },
      {
        path: "article",
        name: "文章",
        meta: {
          title: "文章"
        },
        component: () => import("../views/article")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    sessionStorage.removeItem("user");
  }
  var user = sessionStorage.getItem("user");
  if (!user && to.path !== "/login") {
    next({
      path: "/login"
    });
  } else {
    next();
  }
});

export default router;
