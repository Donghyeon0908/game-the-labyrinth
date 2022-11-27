const getMoveType = (key) => {
  let type = "";

  switch (key) {
    case "w":
    case "ㅈ":
      type = "up";
      break;
    case "a":
    case "ㅁ":
      type = "left";
      break;
    case "d":
    case "ㅇ":
      type = "right";
      break;
    case "s":
    case "ㄴ":
      type = "down";
      break;
    default:
      type = "";
  }

  return type;
};

export default getMoveType;
