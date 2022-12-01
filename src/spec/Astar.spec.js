import AStar from "../utils/AStar";
import { DEFAULT_MAPDATA } from "../constants/constants";
import Graph from "../utils/Graph";

describe.only("A* 알고리즘 테스트", () => {
  it("A* 알고리즘으로 최단경로를 구한다", () => {
    const start = [9, 14];
    const end = [0, 0];
    const mapData = new Graph(DEFAULT_MAPDATA);
    const result = AStar(
      mapData,
      mapData.grid[start[0]][start[1]],
      mapData.grid[end[0]][end[1]]
    );
    const path = [
      [8, 14],
      [7, 14],
      [6, 14],
      [6, 13],
      [6, 12],
      [5, 12],
      [5, 11],
      [4, 11],
      [3, 11],
      [3, 10],
      [2, 10],
      [2, 9],
      [2, 8],
      [2, 7],
      [1, 7],
      [1, 6],
      [1, 5],
      [1, 4],
      [1, 3],
      [1, 2],
      [1, 1],
      [1, 0],
      [0, 0],
    ];

    expect(result).toEqual(path);
  });
});
