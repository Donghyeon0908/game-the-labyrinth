const mapSlice = (set) => ({
  imageData: {},
  mapLoaded: false,

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
