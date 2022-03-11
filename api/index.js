import request from "../utils/request/index";

export function login(data) {
  return request.post({
    url: "v1/wechat/autoLogin",
    data: data
  })
}
export function loginInfo(data) {
  return request.post({
    url: "v1/wechat/change/info",
    data: data
  })
}
// 充值接口
export function orderCreate(data) {
  return request.post({
    url: "v1/pay/order/create",
    data: data
  })
}
// 充值列表
export function chargelogs(data) {
  return request.post({
    url: "v1/user/charge/logs",
    data: data
  })
}
export function delUser(token, uid, data) {
  return request.delete({
    url: "/user/delete",
    data: data,
    params: {token, uid}
  })
}

// 页面中请求方式
  // login({
  //     "phone_number": "123123123",
  //     "verification_code": "123321"
  //   }).then(response => {
  //     console.log(response);
  //   });
  //   delUser("token", 1,
  //     {
  //       info: "info"
  //     }).then(response => {
  //     console.log(response);
  //   });