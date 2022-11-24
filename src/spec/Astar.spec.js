import AStar from "../utils/AStar";
import { DEFAULT_MAPDATA } from "../constants/constants";
import Graph from "../utils/Graph";

describe("A* 알고리즘 테스트", () => {
  it("A* 알고리즘으로 최단경로를 구한다", () => {
    const start = [9, 14];
    const end = [0, 0];
    const mapData = new Graph(DEFAULT_MAPDATA);
    const result = AStar(
      mapData.nodes,
      mapData.nodes[start[0]][start[1]],
      mapData.nodes[end[0]][end[1]]
    );
    const path = [
      [9, 13],
      [9, 12],
      [9, 11],
      [9, 10],
      [9, 9],
      [8, 9],
      [7, 9],
      [6, 9],
      [5, 9],
      [4, 9],
      [3, 9],
      [3, 8],
      [2, 8],
      [2, 7],
      [2, 6],
      [2, 5],
      [2, 4],
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
