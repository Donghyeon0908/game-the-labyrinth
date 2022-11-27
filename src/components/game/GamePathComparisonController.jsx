import { useEffect, useMemo } from "react";

import useStore from "../../store/useStore";
import isEqual from "../../utils/utils";

function GamePathComparisonController() {
  const playerX = useStore((state) => state.x);
  const playerY = useStore((state) => state.y);
  const shortestPath = useStore((state) => state.shortestPath);
  const moveCount = useStore((state) => state.moveCount);
  const setIsSuccess = useStore((state) => state.setIsSuccess);
  const setIsClear = useStore((state) => state.setIsClear);
  const startingPoint = useStore((state) => state.startingPoint);
  const setMoveCount = useStore((state) => state.setMoveCount);
  const curPosition = useMemo(() => [playerY, playerX], [playerY, playerX]);

  useEffect(() => {
    if (
      curPosition[0] !== null &&
      !isEqual(curPosition, startingPoint) &&
      !isEqual(curPosition, shortestPath[shortestPath.length - 1]) &&
      !isEqual(curPosition, shortestPath[moveCount])
    ) {
      setIsSuccess(false);
    }
  }, [moveCount, shortestPath, curPosition, setIsSuccess, startingPoint]);

  useEffect(() => {
    if (
      curPosition[0] !== null &&
      isEqual(curPosition, shortestPath[shortestPath.length - 1])
    ) {
      setIsClear(true);
      setMoveCount(0);
    }
  }, [curPosition, setIsClear, shortestPath, setMoveCount]);

  return null;
}

export default GamePathComparisonController;
