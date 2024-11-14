import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CustomButton from "../Button/Button";
import { paths } from "../../app/routes/paths";

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
		justifyContent: "space-evenly",
	},
	headerOptions: {
		display: "flex",
		flex: 1,
		justifyContent: "flex-end",
		gap: "2rem",
	},
}));

const HeaderNavBar: React.FC = () => {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6">Example, Inc.</Typography>
				<div className={classes.headerOptions}>
					<CustomButton
						component={Link}
						to={paths.app.home.path}
						variant="contained"
						color="primary"
					>
						<Typography>Home</Typography>
					</CustomButton>
					<CustomButton
						component={Link}
						to={paths.app.users.path}
						variant="contained"
						color="primary"
					>
						<Typography>Manage Users</Typography>
					</CustomButton>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default HeaderNavBar;
