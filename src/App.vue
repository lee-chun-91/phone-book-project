<template>
  <div id="app">
    <LayoutComponent></LayoutComponent>
    <!--    <AddPhoneNumber></AddPhoneNumber>-->
    <!--    <PhoneNumberTableContainer></PhoneNumberTableContainer>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LayoutComponent from "@/components/layouts/LayoutComponent.vue";

export default Vue.extend({
  components: { LayoutComponent },
});
</script>

<style></style>
