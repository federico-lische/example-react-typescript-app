import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Typography } from "@material-ui/core";
import CustomButton from "../../components/Button/Button";
import { paths } from "../../app/routes/paths";

const StyledHomeContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "center",
	height: "100%",
	gap: "2rem",
});

const Home: React.FC = () => {
	return (
		<StyledHomeContainer>
			<Typography variant="h1">Example, Inc.</Typography>
			<Typography variant="h6">
				An example app showing how to list, add, edit and delete user records
				with React + TypeScript, Redux, Material UI and Formik.
			</Typography>
			<CustomButton
				component={Link}
				to={paths.app.users.path}
				variant="contained"
				color="primary"
			>
				<Typography>Manage Users</Typography>
			</CustomButton>
		</StyledHomeContainer>
	);
};

export default Home;
