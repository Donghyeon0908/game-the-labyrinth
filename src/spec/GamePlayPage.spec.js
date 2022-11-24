import { render, screen } from "@testing-library/react";
import GamePlatPage from "../components/GamePlayPage";

describe("게임 플레이 페이지 테스트", () => {
  beforeEach(() => {
    render(<GamePlatPage />);
  });

  it("힌트 버튼이 있음", () => {
    const hintButton = screen.getByRole("button", { name: "힌트" });
    expect(hintButton).toBeTruthy();
  });

  it("캐릭터와 맵이 있음", () => {
    const tile = screen.getByAltText("map-tile-1");
    const tile2 = screen.getByAltText("map-tile-2");
    const tile3 = screen.getByAltText("map-tile-3");
    const tile4 = screen.getByAltText("map-tile-4");
    const character = screen.getAllByAltText("character-sprite-DEFAULT");

    expect(tile).toBeTruthy();
    expect(tile2).toBeTruthy();
    expect(tile3).toBeTruthy();
    expect(tile4).toBeTruthy();
    expect(character).toBeTruthy();
  });
});
