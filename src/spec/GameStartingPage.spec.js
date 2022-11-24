import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameStartingPage from "../components/GameStartingPage";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("초기화면 테스트", () => {
  it("처음 화면에 타이틀과 2개의 버튼이 있음 있음", () => {
    render(
      <Router>
        <GameStartingPage />
      </Router>
    );
    const guideButton = screen.getByRole("button", { name: "Game Guide" });
    const startButton = screen.getByRole("button", { name: "Game Start" });
    const Title = screen.getByText("The Labyrinth");

    expect(Title).toBeTruthy();
    expect(guideButton).toBeTruthy();
    expect(startButton).toBeTruthy();
  });

  it("게임 스타트 버튼을 누르면 해당 페이지로 이동", () => {
    render(
      <Router>
        <GameStartingPage />
      </Router>
    );
    const startButton = screen.getByRole("button", { name: "Game Start" });
    userEvent.click(startButton);

    expect(mockedUsedNavigate).toBeCalledTimes(1);
  });
});
