import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Function to check About page is loading or not", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  console.log("Screen:", screen);
  expect(heading).toBeInTheDocument();
});
