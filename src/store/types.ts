// store/types.ts
import { CommitOptions, Store } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "./state";
// import { Getters } from "@/store/getters";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

// type MyGetters = {
//   getters: {
//     [K in keyof Getters]: ReturnType<Getters[K]>;
//   };
// };

export type MyStore = Omit<Store<RootState>, "commit" | "getters"> &
  MyMutations;
// MyGetters;

// 인터섹션 &
// 합집합 개념

// Omit은 Omit<타입 정의, 특정 키> 의 방식으로 사용
// 타입에서 특정 키만 뺀 타입이 되는 것
