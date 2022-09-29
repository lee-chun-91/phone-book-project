// // store/actions.ts
// import { ActionContext } from "vuex";
// import { Mutations } from "./mutations";
// import { RootState } from "./state";
//
// export enum ActionTypes {
//   FETCH_NEWS = "FETCH_NEWS",
// }
//
// interface News {
//   title: string;
//   id: number;
// }
//
// type MyActionContext = {
//   commit<K extends keyof Mutations>(
//     key: K,
//     payload?: Parameters<Mutations[K]>[1]
//   ): ReturnType<Mutations[K]>;
// } & Omit<ActionContext<RootState, RootState>, "commit">;
//
// export const actions = {
//   async [ActionTypes.FETCH_NEWS](context: MyActionContext, payload?: any) {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const user: News[] = await res.json();
//     return user;
//   },
// };
//
// export type Actions = typeof actions;
