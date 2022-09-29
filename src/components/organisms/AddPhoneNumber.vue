<template>
  <div class="container">
    <h3>전화번호 등록</h3>
    <form @submit="onSubmitInfo">
      <TextInput
        inputTitle="이름"
        :value="name"
        placeholder="영어,공백 포함 20자 이하"
        @input="updateName"
      ></TextInput>
      <TextInput
        inputTitle="이메일"
        :value="email"
        @input="updateEmail"
        placeholder="40자 이하"
      ></TextInput>
      <TextInput
        inputTitle="전화번호"
        placeholder="숫자만 입력"
        :value="phoneNumber"
        :maxLength="13"
        @input="updatePhoneNumber"
      ></TextInput>
      <AtomicButton
        button-name="전화번호 등록"
        :is-passed="isPassed"
      ></AtomicButton>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextInput from "@/components/atoms/TextInput.vue";
import AtomicButton from "@/components/atoms/AtomicButton.vue";
import { MutationTypes } from "@/store/mutations";

export interface InputValue {
  text: string;
  isValid: boolean;
}

export default Vue.extend({
  components: { AtomicButton, TextInput },
  data() {
    return {
      name: {
        text: "",
        isValid: false,
      },
      email: {
        text: "",
        isValid: false,
      },
      phoneNumber: {
        text: "",
        isValid: false,
      },
    };
  },
  computed: {
    // 버튼 활성화 버튼
    isPassed(): boolean {
      let result =
        this.name.isValid && this.email.isValid && this.phoneNumber.isValid;
      return result;
    },
  },
  methods: {
    // moment: function () {
    //   return moment();
    // },
    // data 변경 & 유효성 검사
    updateName(value: string) {
      this.validateName(value);
      this.name.text = value;
    },
    updateEmail(value: string) {
      this.validateEmail(value);
      this.email.text = value;
    },
    updatePhoneNumber(value: string) {
      this.validatePhoneNumber(value);
      value = value.replace(/[^0-9]/g, "");
      if (value.length < 3) {
        this.phoneNumber.text = value;
      } else {
        if (value.substring(0, 2) === "02") {
          if (value.length <= 5) {
            this.phoneNumber.text =
              value.substring(0, 2) + "-" + value.substring(2, 6);
          } else if (value.length > 5 && value.length <= 9) {
            this.phoneNumber.text =
              value.substring(0, 2) +
              "-" +
              value.substring(2, 6) +
              "-" +
              value.substring(6, 11);
          } else if (value.length > 9) {
            this.phoneNumber.text =
              value.substring(0, 2) +
              "-" +
              value.substring(2, 6) +
              "-" +
              value.substring(6, 11);
          }
        } else {
          if (value.length < 8) {
            this.phoneNumber.text = value;
          } else if (value.length == 8) {
            // console.log(value.substring(0, 3));
            // console.log(value.substring(3, 8));
            this.phoneNumber.text =
              value.substring(0, 3) + "-" + value.substring(3, 8);
          } else if (value.length >= 9) {
            this.phoneNumber.text =
              value.substring(0, 3) +
              "-" +
              value.substring(3, 7) +
              "-" +
              value.substring(7, 13);
          }
        }
      }
    },

    // 유효성 검사 로직
    validateName(value: string): boolean {
      const result = /^[a-zA-Z]{1,20}$/.test(value);
      return (this.name.isValid = result);
    },
    validateEmail(value: string): boolean {
      const result = /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/.test(
        value
      );
      return (this.email.isValid = result);
    },
    validatePhoneNumber(value: string): boolean {
      const result = /^\d{2,3}-\d{3,4}-\d{4}$/.test(value);
      return (this.phoneNumber.isValid = result);
    },

    // 폼 제출
    onSubmitInfo(event: HTMLFormElement) {
      event.preventDefault();
      let date = new Date();
      let data = {
        name: this.name.text,
        email: this.email.text,
        phoneNumber: this.phoneNumber.text,
        date:
          date.getFullYear() +
          "년 " +
          (date.getMonth() + 1) +
          "월 " +
          date.getDate() +
          "일 " +
          date.getHours() +
          "시 " +
          date.getMinutes() +
          "분",
      };
      // this.$store.commit();
      this.updateName("");
      this.updateEmail("");
      this.updatePhoneNumber("");
      this.$store.commit(MutationTypes.ADD_ITEM, data);
    },
  },
});
</script>

<style scoped>
.container {
  border: 1px solid antiquewhite;
}
</style>
