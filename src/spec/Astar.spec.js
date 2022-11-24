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
      [8, 14],
      [7, 14],
      [6, 14],
      [5, 14],
      [4, 14],
      [3, 14],
      [2, 14],
      [1, 14],
      [0, 14],
      [0, 13],
      [0, 12],
      [0, 11],
      [0, 10],
      [0, 9],
      [0, 8],
      [0, 7],
      [0, 6],
      [0, 5],
      [0, 4],
      [0, 3],
      [0, 2],
      [0, 1],
      [0, 0],
    ];

    expect(result).toEqual(path);
  });
});
