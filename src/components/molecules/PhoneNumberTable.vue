<template>
  <div v-show="tableData.length > 0">
    <el-table
      :data="tableData"
      height="250"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="name" label="Name"> </el-table-column>
      <el-table-column prop="email" label="Email"> </el-table-column>
      <el-table-column prop="phoneNumber" label="PhoneNumber">
      </el-table-column>
      <el-table-column prop="date" label="Date"> </el-table-column>
      <el-table-column label="Date" width="100"
        ><button>수정</button>
      </el-table-column>
      <el-table-column label="Date" width="100"
        ><button>삭제</button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  methods: {
    tableRowClassName({ row, rowIndex }) {
      console.log(row, rowIndex);
      console.log(rowIndex % 2);
      if (rowIndex % 2 === 0) {
        return "colored-row";
      }
      return "";
    },
  },
  computed: {
    tableData() {
      return this.$store.state.phoneNumberList;
    },
  },
});
</script>

<style>
.colored-row {
  background: #f2f2f2;
}
</style>
