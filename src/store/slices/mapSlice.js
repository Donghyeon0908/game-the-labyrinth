const mapSlice = (set) => ({
  tilesImageData: {},
  isMap: false,
  shortestPath: [],
  mapData: [
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 4, 1, 1, 4, 1, 1, 1],
    [1, 1, 4, 4, 1, 1, 4, 4, 1, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 1, 4, 4, 4, 4, 4, 4, 1, 1],
    [1, 1, 1, 4, 4, 4, 4, 1, 1, 1],
    [1, 1, 1, 1, 4, 4, 1, 1, 1, 3],
  ],

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
});

export default mapSlice;
