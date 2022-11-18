const mapSlice = (set) => ({
  imageData: {},
  mapLoaded: false,
  mapData: [
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 4, 4, 4, 1, 1, 1, 1],
    [1, 1, 1, 4, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 4, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 4, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 4, 1, 1, 1, 1, 1, 3],
  ],

  setBufferImage: (payload) =>
    set((state) => ({
      imageData: {
        ...state.imageData,
        [payload]: 1,
      },
    })),

  loadMap: (payload) =>
    set(() => ({
      mapLoaded: payload,
    })),
});

export default mapSlice;
