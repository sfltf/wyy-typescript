import request from "@/uitls/request";
import { Api } from "@/interface/api";

// 首页轮播图
export function banner(data: {}) {
  return request({
    url: "/banner",
    method: "get",
    params: data
  });
}

// 热门歌单
export function hotplaylist(data: {}) {
  return request({
    url: "/personalized",
    method: "get",
    params: data
  });
}

// 新碟上架
export function album(data: Api = { limit: 10, type: "hot" }) {
  return request({
    url: "/top/album",
    method: "get",
    params: data
  });
}

// 所有榜单
export function toplist(data: {}) {
  return request({
    url: "/toplist",
    method: "get",
    params: data
  });
}

