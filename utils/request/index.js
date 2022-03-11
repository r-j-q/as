import Request from "./request";
import {pordUrl} from "./config";

const mRequest = new Request();

// 请求拦截器
mRequest.interceptors.request(request => {
  return request;
});

// 响应拦截器
mRequest.interceptors.response(response => {
  const res = response.data;
 
  if (res.code !== 1000) {
    uni.showToast({
      title: res.message || "Error",
      duration: 2000,
      icon: "none"
    });
 
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    
      uni
        .showToast({
          title: "您已登出，请重新登录",
          duration: 2000,
          icon: "none"
        })
        .then(() => {
         
          console.log('redirect to login')
        });
    }
    return Promise.reject(new Error(res.message || "Error")).catch(error => {
      console.log(error);
    })
  } else {
    return res;
  }
});
 
mRequest.setConfig(config => {
  config.baseURL = pordUrl;
  return config;
});

export default mRequest;