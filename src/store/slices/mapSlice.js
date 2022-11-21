const mapSlice = (set) => ({
  tilesImageData: {},
  isMap: false,
  shortestPath: [],
  mapData: null,
  isClear: false,
  isHint: false,

  setBufferImage: (payload) =>
    set((state) => ({
      tilesImageData: {
        ...state.tilesImageData,
        [payload]: 1,
      },
    })),

  setIsMap: (payload) =>
    set(() => ({
      isMap: payload,
    })),

  setShortestPath: (payload) =>
    set(() => ({
      shortestPath: payload,
    })),

  setMapData: (payload) =>
    set(() => ({
      mapData: payload,
    })),

  setIsClear: (payload) =>
    set(() => ({
      isClear: payload,
    })),

  setIsHint: (payload) =>
    set(() => ({
      isHint: payload,
    })),
});

export default mapSlice;
