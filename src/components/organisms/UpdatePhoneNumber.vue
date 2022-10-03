<template>
  <div class="updatePhoneNumber">
    <form @submit="onSubmitInfo" class="formContainer">
      <PhoneNumberInput
        inputTitle="이름"
        :value="name"
        placeholder="영어,공백 포함 20자 이하"
        @input="updateName"
      ></PhoneNumberInput>
      <PhoneNumberInput
        inputTitle="이메일"
        :value="email"
        @input="updateEmail"
        placeholder="40자 이하"
      ></PhoneNumberInput>
      <PhoneNumberInput
        inputTitle="전화번호"
        placeholder="숫자만 입력"
        :value="phoneNumber"
        :maxLength="13"
        @input="updatePhoneNumber"
      ></PhoneNumberInput>
      <div class="buttonAria">
        <BaseButton button-name="정보 수정" :is-passed="isPassed"></BaseButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PhoneNumberInput from "@/components/atoms/PhoneNumberInput.vue";
import BaseButton from "@/components/atoms/BaseButton.vue";
import { MutationTypes } from "@/store/mutations";
import { PhoneNumberItem } from "@/store/state";

// export interface InputValue {
//   text: string;
//   isValid: boolean;
// }

export default Vue.extend({
  components: { BaseButton, PhoneNumberInput },
  data() {
    return {
      // isLoading: true,
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
      date: "",
      phoneNumberId: Number(this.$route.params.id),
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

  created() {
    this.phoneNumberItem();
  },

  methods: {
    phoneNumberItem() {
      let phoneNumberItem: PhoneNumberItem =
        this.$store.state.phoneNumberList[this.phoneNumberId];

      this.name.text = phoneNumberItem.name;
      this.email.text = phoneNumberItem.email;
      this.phoneNumber.text = phoneNumberItem.phoneNumber;
      this.date = phoneNumberItem.date;
      return phoneNumberItem;
    },

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
    onSubmitInfo: function (event: HTMLFormElement) {
      event.preventDefault();
      let data = {
        name: this.name.text,
        email: this.email.text,
        phoneNumber: this.phoneNumber.text,
        date: this.date,
        id: this.phoneNumberId,
      };

      console.log(data);

      this.updateName("");
      this.updateEmail("");
      this.updatePhoneNumber("");
      this.$store.commit(MutationTypes.UPDATE_ITEM, data);
      this.$message({
        message: "정보가 수정되었습니다.",
        type: "success",
      });
    },
  },
});
</script>

<style scoped>
.updatePhoneNumber {
  background: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.formContainer {
  width: 50%;
}

.buttonAria {
  display: flex;
  flex-direction: row;
  justify-content: right;
}
</style>
