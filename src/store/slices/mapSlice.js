const mapSlice = (set) => ({
  tilesImageData: {},
  isMap: false,
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
});

export default mapSlice;
