<template>
  <div v-show="tableData.length > 0" class="tableArea">
    <div class="tableHeader">
      <h2>전화번호부</h2>
      <button class="deleteAllButton" @click="deleteAll">전체삭제</button>
    </div>
    <table>
      <thead style="height: 50px">
      <tr>
        <th :key="index" v-for="(value, name, index) in tableData[0]">
          {{ name }}
        </th>
        <th>수정</th>
        <th>삭제</th>
      </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(info, index) in tableData" :class="coloredClass(index)">
          <td :key="index" v-for="(item, index) in info">{{ item }}</td>
          <td>
            <router-link :to="{ name: 'UpdatePhoneNumber', params: { id : index }}">
              <button @click="phoneNumberEdit(index)">수정</button></router-link>

          </td>
          <td><button @click="phoneNumberDelete(index)">삭제</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import { MutationTypes } from "@/store/mutations";

export default Vue.extend({
  methods: {
    coloredClass(rowIndex) {
      // console.log(rowIndex);
      // console.log(rowIndex % 2);
      if (rowIndex % 2 === 0) {
        return "colored-row";
      }
      return "";
    },

    phoneNumberEdit(index) {
      console.log("Edit", index);
    },

    phoneNumberDelete(index) {
      this.$store.commit(MutationTypes.DELETE_ITEM, index);
    },

    deleteAll() {
      this.$store.commit(MutationTypes.DELETE_ALL);
    }
  },
  computed: {
    tableData() {
      return this.$store.state.phoneNumberList;
    },
  },
});
</script>

<style scoped>
.tableHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}

.deleteAllButton {
  width: auto;
  height: 30px;
}

.tableArea {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}

table {
  width: 100%;
}

th {
  width: auto;
}

th,
td {
  text-align: center;
}

.colored-row {
  background-color: lightblue;
}
</style>
