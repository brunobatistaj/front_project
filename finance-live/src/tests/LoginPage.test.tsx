import { render, screen } from "@testing-library/react";
import LoginPage from "@/pages/LoginPage";

describe("LoginPage", () => {
    it("should render login title", () => {
        render(<LoginPage />);

        expect(screen.getByText("Login")).toBeInTheDocument();
    });
});