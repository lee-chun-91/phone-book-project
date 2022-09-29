import { RootState } from "./state";
import { PhoneNumberItem } from "./state";

// 뮤테이션 타입
export enum MutationTypes {
  SET_LIST = "SET_LIST",
  ADD_ITEM = "ADD_ITEM",
}

// 뮤테이션 속성 함수
export const mutations = {
  [MutationTypes.ADD_ITEM](state: RootState, phoneNumberItem: PhoneNumberItem) {
    state.phoneNumberList.push(phoneNumberItem);
  },
};

export type Mutations = typeof mutations;
