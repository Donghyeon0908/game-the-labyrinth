// 출발 > 종점 간
// 방해물 index 4
// 그래프 , 큐
// 이진 힙

// 맨하탄 거리 휴리스틱

export const getManhattanDistance = (from, to) => {
  return Math.abs(from.x - to.x) + Math.abs(from.y - to.y);
};

// 스타팅 포인트와 앤드 포인트 확인

export const getStartingEndPoint = (mapData) => {
  const startingPoint = [];
  const endPoint = [];

  for (let i = 0; i < mapData.length; i += 1) {
    for (let j = 0; j < mapData.length; j += 1) {
      if (mapData[i][j] === 2) {
        startingPoint.push(i, j);
      }
      if (mapData[i][j] === 3) {
        endPoint.push(i, j);
      }
    }
  }

  return [startingPoint, endPoint];
};

// 이진힙 작성

// ASTAR

const AStar = () => {};
