import create from "zustand";

import mapSlice from "./slices/mapSlice";
import characterSlice from "./slices/characterSlice";

const useStore = create((set) => ({
  ...mapSlice(set),
  ...characterSlice(set),
}));

export default useStore;
