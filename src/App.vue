<template>
  <div id="app">
    <AddPhoneNumber></AddPhoneNumber>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AddPhoneNumber from "@/components/organisms/AddPhoneNumber.vue";

export default Vue.extend({
  components: { AddPhoneNumber },
});
</script>

<style></style>
