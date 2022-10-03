<template>
  <div class="phoneNumberInput">
    <!--속성값에 동적 데이터 넣고 싶으면 :(v-vind) 로 연결-->
    <label :for="inputTitle">{{ inputTitle }} </label>
    <input
      type="text"
      :id="inputTitle"
      :placeholder="placeholder"
      :value="value.text"
      :maxlength="maxLength"
      @input="handleInput"
    />
    <p :class="hidden">{{ inputTitle }}을 입력해주세요</p>
    <p :class="show" v-if="value.isValid">검사 통과</p>
    <p :class="show" v-else>검사 통과X</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { InputValue } from "@/components/organisms/AddPhoneNumberComponent.vue";

export default Vue.extend({
  props: {
    inputTitle: String,
    placeholder: String,
    value: {
      type: Object as PropType<InputValue>,
      required: true,
    },
    maxLength: Number,
  },

  computed: {
    hidden() {
      return this.value.text.length > 0 ? "hidden" : null;
    },
    show() {
      return this.value.text.length > 0 ? null : "hidden";
    },
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
.phoneNumberInput {
  display: flex;
  flex-direction: column;
}

.phoneNumberInput > label,
p {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #495057;

  margin-top: 4px;
}

.phoneNumberInput > input {
  margin: 5px 0 0 0;
}

.hidden {
  display: none;
}
</style>
