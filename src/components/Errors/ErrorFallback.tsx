import { Typography } from '@material-ui/core';
import CustomButton from '../Button/Button';

export const ErrorFallback = () => {
  return (
    <div
      role="alert"
    >
      <Typography variant="h2">Oops, something went wrong</Typography>
      <CustomButton
        onClick={() => window.location.assign(window.location.origin)}
      >
        <Typography>Refresh</Typography> 
      </CustomButton>
    </div>
  );
};
