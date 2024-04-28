import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import LoadingModal from "../LoadingModal";

describe("LoadingModal Component Unit Test", () => {
  it("should rendered correctly but isOpen", () => {
    const { getByTestId } = render(<LoadingModal isOpen={true} />);
    const loadingModal = getByTestId("loading-modal-component");
    expect(loadingModal).toBeInTheDocument();
  });

  it("should rendered correctly but !isOpen", () => {
    const { getByTestId } = render(<LoadingModal isOpen={false} />);
    const loadingModal = getByTestId("loading-modal-component");
    expect(loadingModal).not.toHaveTextContent("Loading...");
  });
});
