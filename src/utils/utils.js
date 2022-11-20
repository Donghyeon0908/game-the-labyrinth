export const getStartingEndPoint = (mapData) => {
  const startingPoint = [];
  const endPoint = [];

  for (let i = 0; i < mapData.length; i += 1) {
    for (let j = 0; j < mapData.length; j += 1) {
      if (mapData[i][j] === 2) {
        endPoint.push(i, j);
      }
      if (mapData[i][j] === 3) {
        startingPoint.push(i, j);
      }
    }
  }

  return [startingPoint, endPoint];
};

export const getMoveType = (key) => {
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
