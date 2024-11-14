import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Users from "./Users";
import { renderWithProviders } from "../../../utils/test-utils";
import { createMemoryHistory } from 'history';
import { Route, Router } from 'react-router-dom';

test("Users component should render correctly", () => {
	const history = createMemoryHistory();
	renderWithProviders(
		<Router history={history}>
			<Route component={Users} />
		</Router>
	);

	// The Users component should render the heading
	expect(screen.getByText(/Users/i)).toBeInTheDocument();
});
