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
<style scoped>
button {
  background: #228ae6;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: 0;
  outline: 0;

  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
}

button:disabled {
  background: white;
  color: black;
  border: 1px solid;
}

button:hover {
  cursor: pointer;
}
</style>
