import { RootState } from "./state";
import { PhoneNumberItem } from "./state";

// 뮤테이션 타입
export enum MutationTypes {
  ADD_ITEM = "ADD_ITEM",
  UPDATE_ITEM = "UPDATE_ITEM",
  DELETE_ITEM = "DELETE_ITEM",
  DELETE_ALL = "DELETE_ALL",
}

// 뮤테이션 속성 함수
export const mutations = {
  [MutationTypes.ADD_ITEM](state: RootState, phoneNumberItem: PhoneNumberItem) {
    state.phoneNumberList.push(phoneNumberItem);
  },
  [MutationTypes.UPDATE_ITEM](
    state: RootState,
    phoneNumberItem: PhoneNumberItem
  ) {
    state.phoneNumberList = state.phoneNumberList.map((item, index) =>
      index === phoneNumberItem.id ? phoneNumberItem : item
    );
  },
  [MutationTypes.DELETE_ITEM](state: RootState, deleteItemIndex: number) {
    state.phoneNumberList = state.phoneNumberList.filter(
      (item, index) => index !== deleteItemIndex
    );
  },
  [MutationTypes.DELETE_ALL](state: RootState) {
    state.phoneNumberList = [];
  },
};

export type Mutations = typeof mutations;
