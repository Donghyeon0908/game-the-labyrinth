const characterSlice = (set) => ({
  x: null,
  y: null,
  moveCount: 0,
  startingPoint: null,
  isSuccess: true,
  moveType: "",

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
      startingPoint: payload,
    })),

  setMoveCount: (payload) =>
    set(() => ({
      moveCount: payload,
    })),

  setIsSuccess: (payload) =>
    set(() => ({
      isSuccess: payload,
    })),

  getCharacterMoveType: (payload) =>
    set(() => ({
      moveType: payload,
    })),
});

export default characterSlice;
