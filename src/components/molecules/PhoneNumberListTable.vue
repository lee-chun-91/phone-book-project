<template>
  <div class="phoneNumberListTable">
    <div class="tableArea">
      <div class="tableHeader">
        <h2>전화번호부</h2>
        <SearchInput @input="search"></SearchInput>
        <button class="sortByNameButton" @click="sortByName">
          이름 순 정렬
        </button>
        <button class="deleteAllButton" @click="deleteAll">전체삭제</button>
      </div>
      <div v-show="dataList.length === 0">No Result</div>
      <div v-show="dataList.length > 0">
        <table>
          <thead style="height: 50px">
            <tr>
              <th :key="index" v-for="(value, name, index) in dataList[0]">
                {{ name }}
              </th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr
              :key="index"
              v-for="(info, index) in dataList"
              :class="coloredClass(index)"
            >
              <td :key="index" v-for="(name, item, index) in info">
                {{ name }}
              </td>
              <td>
                <router-link
                  :to="{
                    name: 'UpdatePhoneNumber',
                    params: { id: dataList.indexOf(info) },
                  }"
                >
                  <button>수정</button></router-link
                >
              </td>
              <td><button @click="phoneNumberDelete(index)">삭제</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { MutationTypes } from "@/store/mutations";
import SearchInput from "@/components/atoms/SearchInput";

export default Vue.extend({
  components: { SearchInput },
  data() {
    return {
      dataList: [],
    };
  },
  methods: {
    coloredClass(rowIndex) {
      if (rowIndex % 2 === 0) {
        return "colored-row";
      }
      return "";
    },

    search(searchText) {
      this.dataList = this.$store.state.phoneNumberList.filter((item) =>
        item.phoneNumber.includes(searchText)
      );
    },

    sortByName() {
      this.dataList = this.dataList.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    },
    phoneNumberDelete(index) {
      this.$store.commit(MutationTypes.DELETE_ITEM, index);
      this.dataList = this.$store.state.phoneNumberList;
    },

    deleteAll() {
      this.$store.commit(MutationTypes.DELETE_ALL);
      this.dataList = this.$store.state.phoneNumberList;
    },
  },

  created() {
    this.dataList = this.$store.state.phoneNumberList;
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
