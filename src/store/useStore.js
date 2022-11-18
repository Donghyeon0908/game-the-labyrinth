import create from "zustand";
import { devtools } from "zustand/middleware";

import mapSlice from "./slices/mapSlice";
import characterSlice from "./slices/characterSlice";

const useStore = create(
  devtools((set) => ({
    ...mapSlice(set),
    ...characterSlice(set),
  }))
);

export default useStore;
