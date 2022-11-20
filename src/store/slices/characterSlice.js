const characterSlice = (set) => ({
  x: 9,
  y: 9,
  characterImg: null,
  moveType: "",

  setBufferCharacterImage: (payload) =>
    set(() => ({
      characterImg: payload,
    })),

  move: (payload) =>
    set((state) => ({
      x: state.x + payload[0],
      y: state.y + payload[1],
    })),

  getCharacterMoveType: (payload) =>
    set(() => ({
      moveType: payload,
    })),
});

export default characterSlice;
