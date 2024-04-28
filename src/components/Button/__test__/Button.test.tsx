import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button Component Unit Tests", () => {
  const handleClick = jest.fn();
  it("should rendered", () => {
    render(<Button variety="outline">Button</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  it("should called onClick", () => {
    const { getByTestId } = render(
      <Button variety="primary" onClick={handleClick}>
        Button
      </Button>,
    );
    const button = getByTestId("button-component");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
