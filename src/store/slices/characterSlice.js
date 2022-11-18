const characterSlice = (set) => ({
  x: 9,
  y: 9,
  characterLoaded: false,
  characterImg: null,

  setBufferCharacterImage: (payload) =>
    set(() => ({
      characterImg: payload,
    })),

  move: (payload) =>
    set((state) => ({
      x: state.x + payload[0],
      y: state.y + payload[1],
    })),

  loadCharacter: (payload) =>
    set(() => ({
      characterLoaded: payload,
    })),
});

export default characterSlice;
