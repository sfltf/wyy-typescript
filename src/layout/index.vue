<template>
  <div>
    <layout-header />
    <router-view />
    <layout-footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import layoutHeader from "./components/layout-header/index.vue";
import layoutFooter from "./components/layout-footer/index.vue";
@Component({
  components: {
    layoutHeader,
    layoutFooter
  }
})
export default class Layout extends Vue {}
</script>
