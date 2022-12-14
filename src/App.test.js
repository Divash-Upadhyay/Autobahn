import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Posts/i);
  expect(linkElement).toBeInTheDocument();
});

test("render dashboard component", () => {
  const component = render(<App />);

  const childElement = component.getByLabelText("Posts");
  except(childElement).toBeInTheDocument();
});
