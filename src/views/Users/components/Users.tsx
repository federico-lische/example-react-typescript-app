import UsersTable from './UsersTable/UsersTable';
import { RouteComponentProps } from 'react-router-dom';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledUsersContainerDiv = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'center',
	height: '100%',
	width: '100%',	
	gap: '2rem',
});

const Users = ({ match, history, location }: RouteComponentProps) => {
	return (
		<StyledUsersContainerDiv>
			<Typography variant="h2">Users</Typography>
			<UsersTable match={match} history={history} location={location} />
		</StyledUsersContainerDiv>
	);
};

export default Users;