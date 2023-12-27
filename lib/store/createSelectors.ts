// https://github.com/Albert-Gao/auto-zustand-selectors-hook/blob/master/src/createSelectorFunctions.ts
// https://docs.pmnd.rs/zustand/guides/auto-generating-selectors
import { StoreApi, UseBoundStore } from 'zustand';

export interface ZustandFuncSelectors<StateType> {
  use: {
    [key in keyof StateType]: () => StateType[key];
  };
}

export const createSelectors = <StateType extends object>(
  store: UseBoundStore<StoreApi<StateType>>
) => {
  const storeIn = store as any;

  storeIn.use = {};

  Object.keys(storeIn.getState()).forEach((key) => {
    const selector = (state: StateType) => state[key as keyof StateType];
    storeIn.use[key] = () => storeIn(selector);
  });

  return store as UseBoundStore<StoreApi<StateType>> &
    ZustandFuncSelectors<StateType>;
};
