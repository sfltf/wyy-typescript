<template>
  <div class="layout-footer">
    <div class="footer-center">
      <div class="center-left">
        <ul class="footer-menu">
          <li v-for="(item, index) of menu" :key="index" class="footer-list">
            <a class="footer-link" :href="item.link" target="_blank">{{
              item.name
            }}</a>
          </li>
        </ul>
        <p>
          <span class="text text-margin">网易公司版权所有©1997-{{ new Date().getFullYear() }}</span>
          <span class="text">杭州乐读科技有限公司运营：</span>
          <a
            class="text text-link"
            href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
            target="_blank"
          >浙网文[2018]3506-263号</a>
        </p>
        <p>
          <span class="text text-margin">违法和不良信息举报电话：0571-89853516</span>
          <span class="text">举报邮箱：</span>
          <a
            class="text text-link"
            href="mailto:ncm5990@163.com"
            target="_blank"
          >ncm5990@163.com</a>
        </p>
        <p>
          <span class="text text-margin">粤B2-20090191-18</span>
          <a
            class="text text-link"
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
          >工业和信息化部备案管理系统网站</a>
          <span class="text police-logo" />
          <a
            class="text text-link"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
            target="_blank"
          >
            浙公网安备 33010902002564号</a>
        </p>
      </div>
      <div class="center-right">
        <ul class="logo-menu">
          <li
            v-for="(item, index) of logoMenu"
            :key="index"
            class="logo-menu-list"
          >
            <a class="link-logo" :href="item.link" target="_blank" />
            <span class="text-logo" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Footer extends Vue {
  // 左侧服务条款等菜单
  menu: { name: string; link: string }[] = [
    {
      name: "服务条款",
      link: "https://st.music.163.com/official-terms/service"
    },
    {
      name: "隐私政策",
      link: "https://st.music.163.com/official-terms/privacy"
    },
    {
      name: "儿童隐私政策",
      link: "https://music.163.com/st/staticdeal/complaints.html"
    },
    {
      name: "版权投诉指引",
      link: "https://music.163.com/st/staticdeal/complaints.html"
    },
    {
      name: "意见反馈",
      link: ""
    }
  ];
  //   右侧logo等菜单
  logoMenu: { link: string }[] = [
    {
      link: "https://web-amped.music.163.com/"
    },
    {
      link: "https://music.163.com/st/userbasic#/auth"
    },
    {
      link: "https://music.163.com/st/userbasic#/auth"
    },
    {
      link: "https://music.163.com/web/reward"
    },
    {
      link: "https://music.163.com/uservideo#/plan"
    }
  ];
}
</script>
<style lang="scss" scoped>
.layout-footer {
  position: relative;
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .footer-center {
    margin: 0 auto;
    width: 980px;
  }
  .center-left {
    float: left;
    width: 520px;
    padding-top: 15px;
    line-height: 24px;
    .footer-menu {
      overflow: hidden;
    }
    .footer-list {
      float: left;
      .footer-link {
        color: #999;
      }
      &:hover {
        text-decoration: underline;
      }
      &::after {
        content: "";
        display: table;
        width: 1px;
        height: 12px;
        background: #c2c2c2;
        margin: 0 10px;
        float: right;
        margin-top: 6px;
      }
    }
    .text {
      float: left;
      color: #666;
      &-margin {
        margin-right: 14px;
      }
      &-link:hover {
        text-decoration: underline;
      }
    }
    .police-logo {
      width: 14px;
      height: 14px;
      background: url("../../../assets/frame/police.png") no-repeat;
      background-size: cover;
      display: inline-block;
      margin: 4px 2px 0 10px;
    }
  }
  .center-right {
    float: right;
    width: 452px;
    margin-top: 33px;
    .logo-menu-list {
      float: left;
      width: 60px;
      height: 70px;
      margin-left: 30px;
      text-align: center;
      color: #666;
      .link-logo {
        display: block;
        float: none;
        width: 50px;
        height: 45px;
        margin: 0 auto;
        background: url("../../../assets/frame/foot_enter_new.png") no-repeat;
        background-size: 110px 552px;
      }
      .text-logo {
        display: inline-block;
        margin: 5px 5px 0;
        width: 52px;
        height: 14px;
        background: url("../../../assets/frame/foot_enter_tt.png") no-repeat;
        background-size: 180px 139px;
      }
      &:nth-child(1) .link-logo {
        background-position: -63px -456.5px;
      }
      &:nth-child(1) .text-logo {
        background-position: 0 -108px;
        margin-left: -6px;
        width: 72px;
      }
      &:nth-child(2) .link-logo {
        background-position: -63px -101px;
      }
      &:nth-child(2) .text-logo {
        background-position: -1px -91px;
      }
      &:nth-child(3) .link-logo {
        background-position: 0 0;
      }
      &:nth-child(3) .text-logo {
        background-position: 0 0;
      }
      &:nth-child(4) .link-logo {
        background-position: -60px -50px;
      }
      &:nth-child(4) .text-logo {
        background-position: 0 -54px;
      }
      &:nth-child(5) .link-logo {
        background-position: 0 -101px;
      }
      &:nth-child(5) .text-logo {
        background-position: -1px -72px;
      }
    }
  }
}
</style>
