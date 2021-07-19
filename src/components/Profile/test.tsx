import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import Profile from ".";

const profileItems = {
  profileImg: "/img/patricia-godoy.png",
  name: "John Doe",
  state: "Bahia",
  city: "Salvador",
};

describe("<Profile />", () => {
  it("should render the heading", () => {
    renderWithTheme(<Profile {...profileItems} />);

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();

    expect(screen.getByText(/Bahia/i)).toBeInTheDocument();

    expect(screen.getByText(/Salvador/i)).toBeInTheDocument();
  });
});
