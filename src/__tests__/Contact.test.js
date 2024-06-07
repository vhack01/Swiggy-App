import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Component", () => {
  test("Function to check About page is loading or not", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Checking submit button in Contact Component", () => {
    render(<Contact />);
    const buttonText = screen.getByText("Submit");
  });

  test("Checking input in Contact Component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Enter name");
    expect(inputName).toBeInTheDocument();
  });

  // Testing Multiple tag
  it("Checking all input in Contact Component", () => {
    render(<Contact />);
    const textbox = screen.getAllByRole("textbox");
    console.log("textbox:", textbox);
    expect(textbox.length).toBe(1);
  });
});
