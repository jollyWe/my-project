import Mock from "mockjs";
import login from "./login";

// 登录相关
Mock.mock(/\/api\/auth\/api-token-auth/, "post", login.loginByUsername);
Mock.mock(/\/api\/auth\/logout/, "post", login.logout);
Mock.mock(/\/api\/userinfo/, "get", login.getUserInfo);

export default Mock;
