import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/Users.vue"),
  },
  {
    path: "/members",
    name: "Members",
    component: () => import("../views/Members.vue"),
  },
  { path: "*", component: () => import("../views/Members.vue") },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   console.log("hi", to.path);
//   fetch(`api/${to.path}/uiconfig`)
//     .then((res) => res.json())
//     .then(({ users }) => {
//       console.log("mahsa", users);
//     });
//   next();
// });

export default router;
