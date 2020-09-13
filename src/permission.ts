import router from "./router";
// 前置路由守卫，针对用户登录或未登录做出一些判别提示等
router.beforeEach((to, from, next) => {
  next();
});
