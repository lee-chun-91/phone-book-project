<template>
  <div class="layout">
    <HeaderBar></HeaderBar>
    <router-view></router-view>
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

<style scoped></style>
