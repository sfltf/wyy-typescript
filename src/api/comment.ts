// 公共接口
import request from "@/uitls/request";

// 歌单详情
export function playlistDetail(data: {id: string, s?: number}) {
  return request({
    url: "/playlist/detail",
    method: "get",
    params: data
  });
}
