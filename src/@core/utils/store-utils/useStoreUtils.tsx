import { StoreApi } from "zustand"

const useStoreUtils = <T extends object>(store: StoreApi<T> | null) => {
  return {
    subscriber: (store as StoreApi<T>).subscribe,
    getState: (store as StoreApi<T>).getState
  }
}

export default useStoreUtils