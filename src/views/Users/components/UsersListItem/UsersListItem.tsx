import React from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Typography, TableRow, TableCell } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../../hooks/redux-typed-hooks";
import { RootState } from "../../../../store/store";
import { deleteUser } from "../../store/usersSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CustomButton from "../../../../components/Button/Button";

interface User {
	id: number;
	name: string;
	email: string;
	username: string;
}

interface UsersListItemProps {
	user: User;
}

const UsersListItem: React.FC<UsersListItemProps> = ({ user }) => {
	const dispatch = useAppDispatch();
	const { isLoading, isError } = useAppSelector(
		(state: RootState) => state.users
	);

	const match = useRouteMatch();
	const { path } = match;

	const handleDeleteClick = async (user: User) => {
		try {
			await dispatch(deleteUser(user.id));
		} catch (error) {
			console.error("Failed to delete user:", error);
		}
	};

	if (isError) {
		return <div>{isError}</div>;
	}

	return (
		<TableRow key={user.id}>
			<TableCell>{user.name}</TableCell>
			<TableCell>{user.email}</TableCell>
			<TableCell>{user.username}</TableCell>
			<TableCell>
				<CustomButton
					component={Link}
					to={`${path}/edit/${user.id}`}
					variant="contained"
					color="primary"
					startIcon={<EditIcon />}
				>
					<Typography>Edit</Typography>
				</CustomButton>
			</TableCell>
			<TableCell>
				<CustomButton
					variant="contained"
					color="error"
					startIcon={<DeleteIcon />}
					onClick={() => handleDeleteClick(user)}
					disabled={isLoading}
				>
					<Typography>Delete</Typography>
				</CustomButton>
			</TableCell>
		</TableRow>
	);
};

export default UsersListItem;
