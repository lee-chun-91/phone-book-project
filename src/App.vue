<template>
  <div id="app">
    <AddPhoneNumber></AddPhoneNumber>
    <PhoneNumberTableContainer></PhoneNumberTableContainer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AddPhoneNumber from "@/components/organisms/AddPhoneNumber.vue";
import PhoneNumberTableContainer from "@/components/organisms/PhoneNumberTableContainer.vue";

export default Vue.extend({
  components: { PhoneNumberTableContainer, AddPhoneNumber },
});
</script>

<style></style>
