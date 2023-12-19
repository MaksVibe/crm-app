import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// app.test.js
it("navigates home when you click the logo", () => {
  // in a real test a renderer like "@testing-library/react"
  // would take care of setting up the DOM elements
  const root = document.createElement("div");
  document.body.appendChild(root);

  // Render app
  render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <App />
    </MemoryRouter>,
    root
  );

  // Interact with page
  act(() => {
    // Find the link (perhaps using the text content)
    const goHomeLink = document.querySelector("#click-me");
    // Click it
    goHomeLink &&
      goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
});
