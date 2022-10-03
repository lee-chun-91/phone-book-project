<template>
  <div class="searchInput">
    <label for="searchInput"></label>
    <input
      type="text"
      id="searchInput"
      placeholder="검색할 전화번호를 입력해주세요"
      :value="this.searchText"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      searchText: "",
    };
  },

  methods: {
    handleInput(event: InputEvent) {
      if (!event.target) {
        return;
      }
      const eventTarget = event.target as HTMLInputElement;
      this.$emit("input", eventTarget.value);
    },
  },
});
</script>

<style scoped>
#searchInput {
  height: 25px;
  width: 200px;
}
</style>
