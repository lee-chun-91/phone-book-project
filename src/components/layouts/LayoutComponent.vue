<template>
  <div class="layout">
    <HeaderBar></HeaderBar>
    <div class="contentContainer">
      <router-view></router-view>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import Vue from "vue";
import HeaderBar from "@/components/layouts/HeaderBar";
import FooterBar from "@/components/layouts/FooterBar";

export default Vue.extend({
  components: { FooterBar, HeaderBar },
});
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contentContainer {
  background: rgb(176, 223, 238);
  padding: 8px 10px;
  width: 80%;
}
</style>
