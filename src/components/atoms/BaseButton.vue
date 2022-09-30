<template>
  <button type="submit" @click="submit" :disabled="!isPassed">
    {{ buttonName }}
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    buttonName: String,
    isPassed: Boolean,
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
  },
});
</script>
<style scoped></style>
