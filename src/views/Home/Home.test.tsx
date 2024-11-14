import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home component", () => {
	it("renders the component correctly", () => {
		const { getByText } = render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);

		expect(getByText("Example, Inc.")).toBeInTheDocument();

		expect(
			getByText(
				"An example app showing how to list, add, edit and delete user records with React + TypeScript, Redux, Material UI and Formik."
			)
		).toBeInTheDocument();

		expect(getByText("Manage Users")).toBeInTheDocument();
	});
});
