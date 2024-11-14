import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
	color?: 'inherit'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'info'
	| 'warning';
	variant?: 'text' | 'outlined' | 'contained';
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	startIcon?: React.ReactNode;
	onClick?: () => void;
	component?: React.ElementType;
	to?: string;
	role?: string;
	children?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	color = 'primary',
	variant = 'contained',
	type = 'button',
	disabled = false,
	startIcon = undefined,
	onClick = undefined,
	component = undefined,
	to = undefined,
	role = "button",
	children = undefined,
	...props // Collect the rest of the props
}) => {
	return (
		<Button
			color={color}
			variant={variant}
			type={type}
			disabled={disabled}
			role={role}
			{...startIcon && { startIcon }} // Spread the startIcon prop if it exists	
			{...(onClick && { onClick })} // Spread the onClick prop if it exists
			{...(component && { component })} // Spread the component prop if it exists
			{...(to && { to })} // Spread the to prop if it exists
			{...props} // Spread the rest of the props
		>
			{children}
		</Button>
	);
};

export default CustomButton;