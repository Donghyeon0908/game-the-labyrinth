import { useEffect, useMemo } from "react";
import useStore from "../../store/useStore";

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
      JSON.stringify(curPosition) !== JSON.stringify(startingPoint) &&
      JSON.stringify(curPosition) !==
        JSON.stringify(shortestPath[shortestPath.length - 1]) &&
      JSON.stringify(curPosition) !== JSON.stringify(shortestPath[moveCount])
    ) {
      setIsSuccess(false);
    }
  }, [moveCount, shortestPath, curPosition, setIsSuccess, startingPoint]);

  useEffect(() => {
    if (
      JSON.stringify(curPosition) ===
      JSON.stringify(shortestPath[shortestPath.length - 1])
    ) {
      setIsClear(true);
      setMoveCount(0);
    }
  }, [curPosition, setIsClear, shortestPath, setMoveCount]);

  return null;
}

export default GamePathComparisonController;
