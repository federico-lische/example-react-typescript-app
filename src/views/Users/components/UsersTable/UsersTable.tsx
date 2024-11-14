import React, { useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
	Paper,
	Typography,
	TableContainer,
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	TablePagination,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
	useAppSelector,
	useAppDispatch,
} from "../../../../hooks/redux-typed-hooks";
import { RootState } from "../../../../store/store";
import { fetchUsers } from "../../store/usersSlice";
import UsersListItem from "../UsersListItem/UsersListItem";
import TablePaginationActions from "../../../../components/Table/TablePaginationActions";
import CustomButton from "../../../../components/Button/Button";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

const UsersTableContainerDiv = styled("div")({
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "center",
	height: "90%",
	width: "100%",
	gap: "2rem",
});

interface Column {
	id: "name" | "email" | "username" | "actionEdit" | "actionDelete";
	name: string;
}

const columns: Column[] = [
	{ id: "name", name: "Name" },
	{ id: "email", name: "Email" },
	{ id: "username", name: "User Name" },
	{ id: "actionEdit", name: "Edit User" },
	{ id: "actionDelete", name: "Delete User" },
];

const UsersTable: React.FC<RouteComponentProps> = ({ match }) => {
	const { users, isLoading, isError } = useAppSelector(
		(state: RootState) => state.users
	);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const dispatch = useAppDispatch();
	const { path } = match;

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const handleChangePage = (
		_: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (isError) {
		return <div>{isError}</div>;
	}

	const usersToShow =
		rowsPerPage > 0
			? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
			: users;

	return (
		<UsersTableContainerDiv>
			<CustomButton
				component={Link}
				to={`${path}/add`}
				variant="contained"
				color="primary"
				startIcon={<AddIcon />}
			>
				<Typography>Add user</Typography>
			</CustomButton>
			<TableContainer sx={{ width: "auto" }} component={Paper}>
				<Table aria-label="users-table" sx={{ width: "auto" }} size="small">
					<TableHead>
						<TableRow sx={{ backgroundColor: "primary.main" }}>
							{columns.map((column) => (
								<TableCell key={column.id} sx={{ color: "white" }}>
									{column.name}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{!users && (
							<TableRow>
								<TableCell>
									<LoadingSpinner />
								</TableCell>
							</TableRow>
						)}
						{users &&
							usersToShow.map((user) => (
								<UsersListItem key={user.id} user={user} />
							))}

						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}

						{users && !users.length && (
							<TableRow>
								<TableCell colSpan={4}>
									<Typography>No Users To Display</Typography>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
				<TablePagination
					component="div"
					count={users.length || 0}
					page={page}
					onPageChange={handleChangePage}
					rowsPerPage={rowsPerPage}
					onRowsPerPageChange={handleChangeRowsPerPage}
					rowsPerPageOptions={[5, 10, 25]}
					ActionsComponent={TablePaginationActions}
				/>
			</TableContainer>
		</UsersTableContainerDiv>
	);
};

export default UsersTable;
