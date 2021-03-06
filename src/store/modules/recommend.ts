import { banner, hotplaylist, album, toplist } from "@/api/recommend";
import { Api, List } from "@/interface/api";

const actions = {
  // 首页轮播图
  banner(_any: any, data: {}) {
    return new Promise((resolve, reject) => {
      banner(data)
        .then(res => {
          resolve(res);
        })
        .catch(e => {
          reject(e);
        });
    });
  },
  // 热门歌单
  hotplaylist(_any: any, data: {}) {
    return new Promise((resolve, reject) => {
      hotplaylist(data)
        .then(res => {
          resolve(res);
        })
        .catch(e => {
          reject(e);
        });
    });
  },
  // 新碟上架
  album(_any: any, data: Api) {
    return new Promise((resolve, reject) => {
      album(data)
        .then(res => {
          resolve(res);
        })
        .catch(e => {
          reject(e);
        });
    });
  },
  // 所有榜单
  toplist(_any: any, data: List) {
    return new Promise((resolve, reject) => {
      toplist(data)
        .then(res => {
          resolve(res);
        })
        .catch(e => {
          reject(e);
        });
    });
  }
};

export default {
  namespaced: true,
  actions
};
