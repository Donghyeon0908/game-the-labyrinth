import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/buttons/Button";
import HintButton from "../components/buttons/HintButton";

describe("버튼 테스트", () => {
  it("버튼 렌더링 테스트", () => {
    const title = "버튼 테스트";
    const handleClick = jest.fn();

    render(<Button buttonName={title} onClick={handleClick} />);
    const button = screen.getByRole("button");

    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("힌트 버튼 렌더링 테스트", () => {
    render(<HintButton />);
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("힌트");
  });
});
