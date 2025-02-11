import { Mutate, StateCreator, StoreApi } from "zustand"

export type StoreSubscriber<T extends object> = () => {
  subscriber: Mutate<StoreApi<T>, [["zustand/immer", never], ["zustand/subscribeWithSelector", never]]>["subscribe"]
  getState: Mutate<StoreApi<T>, [["zustand/immer", never], ["zustand/subscribeWithSelector", never]]>["getState"]
}

// this type is useful when use slice pattern with immer
export type ImmerStateCreator<T> = StateCreator<
  T,
  [["zustand/immer", never], never],
  [],
  T
>

export type ISetState<T> = Mutate<StoreApi<T>, [["zustand/immer", never]]>["setState"]

export type IGetState<T> = Mutate<StoreApi<T>, [["zustand/immer", never]]>["getState"]