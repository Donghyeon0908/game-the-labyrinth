const getStartingEndPoint = (mapData) => {
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

export default getStartingEndPoint;
