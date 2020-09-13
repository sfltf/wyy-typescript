import { playlistDetail } from "@/api/comment";

const actions = {
  // 首页轮播图
  playlistDetail(_any: any, data: { id: string; s?: number }) {
    return new Promise((resolve, reject) => {
      playlistDetail(data)
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
