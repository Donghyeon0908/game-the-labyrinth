import { useEffect, useMemo } from "react";
import useStore from "../../store/useStore";

function GameController() {
  const playerX = useStore((state) => state.x);
  const playerY = useStore((state) => state.y);
  const shortestPath = useStore((state) => state.shortestPath);
  const moveCount = useStore((state) => state.moveCount);
  const setIsSuccess = useStore((state) => state.setIsSuccess);
  const curPosition = useMemo(() => [playerY, playerX], [playerY, playerX]);

  useEffect(() => {
    if (
      !!curPosition[0] &&
      JSON.stringify(curPosition) !== JSON.stringify(shortestPath[moveCount])
    ) {
      setIsSuccess(false);
    }
  }, [moveCount, shortestPath, curPosition, setIsSuccess]);

  return null;
}

export default GameController;
