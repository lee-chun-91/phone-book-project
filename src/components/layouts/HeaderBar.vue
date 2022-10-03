<template>
  <div class="header">
    <h2>전화번호부</h2>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1"
        ><router-link to="/">전화번호 목록보기</router-link></el-menu-item
      >
      <el-menu-item index="2"
        ><router-link to="/add">전화번호 추가하기</router-link></el-menu-item
      >
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      activeIndex: "1",
    };
  },
});
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}

h2 {
  margin: auto 20px;
}
</style>
