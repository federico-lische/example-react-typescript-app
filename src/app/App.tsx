import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const Home = lazy(() => import("../views/Home/Home"));
const Users = lazy(() => import("../views/Users/components/Users"));
const UserForm = lazy(() => import("../views/Users/components/UserForm/UserForm"));
const NotFound = lazy(() => import("../components/NotFound/NotFound"));

const useStyles = makeStyles(() =>
	createStyles({
		appRoot: {
			height: "100%",
			width: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			backgroundColor: "#F8F9F9",
		},
		content: {
			flex: 1,
			overflow: "auto",
			padding: "2rem 2.25rem",
		},
	})
);

const App: React.FC = () => {
	const classes = useStyles();
	return (
		<Router>
			<div className={classes.appRoot}>
				<HeaderNavBar />
				<div className={classes.content}>
					<Suspense fallback={<LoadingSpinner />}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/users" component={Users} />
							<Route path="/users/add" component={UserForm} />
							<Route path="/users/edit/:id" component={UserForm} />
							<Route path="*" component={NotFound} />
						</Switch>
					</Suspense>
				</div>
        <ToastContainer position='top-right'></ToastContainer>
			</div>
		</Router>
	);
};

export default App;
