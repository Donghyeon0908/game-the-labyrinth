import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../components/modal/Modal";
import { unfoldIn } from "../utils/animations";

const handleIsOpenModal = jest.fn();
const isOpenModal = true;
const Children = "안녕하세요";
describe("모달 테스트", () => {
  beforeAll(() => {
    const element = document.createElement("div");
    element.setAttribute("id", "portal-root");
    const body = document.querySelector("body");
    body.appendChild(element);
  });

  it("모달 children 테스트", () => {
    const { getByText } = render(
      <Modal
        animation={unfoldIn}
        isOpenModal={isOpenModal}
        handleIsOpenModal={handleIsOpenModal}
      >
        {Children}
      </Modal>
    );

    expect(getByText(Children)).toBeTruthy();
  });

  it("모달 닫기 버튼 테스트", () => {
    render(
      <Modal
        animation={unfoldIn}
        isOpenModal={isOpenModal}
        handleIsOpenModal={handleIsOpenModal}
      >
        {Children}
      </Modal>
    );

    const button = screen.getByRole("button", { name: "닫기" });
    userEvent.click(button);

    expect(handleIsOpenModal).toHaveBeenCalledTimes(1);
  });
});
