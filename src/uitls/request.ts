// 数据请求接口
import axios from "axios";
import qs from "qs";
const service = axios.create({
  baseURL: "/api",
  timeout: 10000,
  withCredentials: true,
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  }
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

// 并发请求
export function concurrentRequest(params: []) {
  return axios.all(params);
}
export default service;
