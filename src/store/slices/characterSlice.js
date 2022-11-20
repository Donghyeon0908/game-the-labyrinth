const characterSlice = (set) => ({
  x: null,
  y: null,
  moveCount: 0,
  characterImg: null,
  isSuccess: true,
  moveType: "",

  setBufferCharacterImage: (payload) =>
    set(() => ({
      characterImg: payload,
    })),

  move: (payload) =>
    set((state) => ({
      x: state.x + payload[0],
      y: state.y + payload[1],
      moveCount: state.moveCount + 1,
    })),

  setStaringPosition: (payload) =>
    set(() => ({
      x: payload[1],
      y: payload[0],
    })),

  setIsSuccess: (payload) =>
    set(() => ({
      isSuccess: false,
    })),

  getCharacterMoveType: (payload) =>
    set(() => ({
      moveType: payload,
    })),
});

export default characterSlice;
