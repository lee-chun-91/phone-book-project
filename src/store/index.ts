import Vue, { PropType } from "vue";
import Vuex from "vuex";
import AddPhoneNumber from "@/components/organisms/AddPhoneNumber.vue";

Vue.use(Vuex);

const store = {
  state: state,
};

export interface PhoneNumberItem {
  name: string;
  email: string;
  phoneNumber: string;
  date: string;
}

export default new Vuex.Store(store);
