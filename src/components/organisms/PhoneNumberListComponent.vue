<template>
  <div class="phoneNumberListComponent">
    <PhoneNumberListTable></PhoneNumberListTable>
  </div>
</template>

<script>
import Vue from "vue";
import PhoneNumberListTable from "@/components/molecules/PhoneNumberListTable";

export default Vue.extend({
  components: { PhoneNumberListTable },
});
</script>

<style scoped>
.tableContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
