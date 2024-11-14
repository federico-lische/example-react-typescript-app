
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { paths }  from '../../app/routes/paths';

const  NotFound = () => {
  return (
    <div>
      <Typography variant="h1">404 - Not Found</Typography>
      <Link to={paths.app.home.path}><Typography>Go Home</Typography></Link>
    </div>
  );
}

export default NotFound;