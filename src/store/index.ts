import Vue, { PropType } from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState, state } from "./state";
import { mutations } from "./mutations";

Vue.use(Vuex);

const store: StoreOptions<RootState> = { state: state, mutations: mutations };

export default new Vuex.Store(store);
