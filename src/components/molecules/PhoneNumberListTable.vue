<template>
  <div class="phoneNumberListTable">
    <div class="tableHeader">
      <div class="tableHeaderInputArea">
        <SearchInput @input="search"></SearchInput>
      </div>
      <div class="tableHeaderButtonArea">
        <button class="sortByNameButton" @click="sortByName">
          이름 순 정렬
        </button>
        <button class="deleteAllButton" @click="deleteAll">전체삭제</button>
      </div>
    </div>
    <div class="tableArea">
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
                  <el-button
                    type="primary"
                    size="small"
                    icon="el-icon-edit"
                  ></el-button
                ></router-link>
              </td>
              <td>
                <div @click="phoneNumberDelete(index)">
                  <el-button
                    type="primary"
                    size="small"
                    icon="el-icon-delete"
                  ></el-button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MutationTypes } from "@/store/mutations";
import SearchInput from "@/components/atoms/SearchInput.vue";
import { PhoneNumberItem } from "@/store/state";

export default Vue.extend({
  components: { SearchInput },
  data() {
    return {
      dataList: [] as PhoneNumberItem[],
    };
  },
  methods: {
    coloredClass(rowIndex: number) {
      if (rowIndex % 2 === 0) {
        return "colored-row";
      }
      return "";
    },

    search(searchText: string) {
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
    phoneNumberDelete(index: number) {
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
.phoneNumberListTable {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
}

.tableHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.tableHeaderInputArea {
  margin-left: 10px;
  width: 50%;
}

.tableHeaderButtonArea > * {
  margin: 0 5px;

  height: 25px;
  background: #228ae6;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: 0;
  outline: 0;

  cursor: pointer;

  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
}

.deleteAllButton {
  width: auto;
}

.tableArea {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
}

table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
}

th {
  width: auto;
}

th,
td {
  text-align: center;
  padding: 5px;
}

tr {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.colored-row {
  background-color: lightblue;
}
</style>
