const getPosition = (mapData, target) => {
  const result = [];

  for (let i = 0; i < mapData.length; i += 1) {
    for (let j = 0; j < mapData[i].length; j += 1) {
      if (mapData[i][j] === target) {
        result.push(i, j);
        break;
      }
    }
  }

  return result;
};

export default getPosition;
