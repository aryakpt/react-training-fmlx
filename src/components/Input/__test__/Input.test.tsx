import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Input from "../Input";

describe("Input Component Unit Test", () => {
  it("should rendered correctly with label", () => {
    const { getByTestId } = render(<Input label="Label" />);
    const input = getByTestId("input-component");
    expect(input).toBeInTheDocument();

    const label = input.getElementsByTagName("label")[0];
    expect(label).toBeInTheDocument();
  });

  it("should rendered correctly without label", () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId("input-component");
    expect(input).toBeInTheDocument();
  });
});
