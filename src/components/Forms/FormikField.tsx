import { ReactElement } from 'react';
import { ErrorMessage, Field } from 'formik';
import TextField from '@material-ui/core/TextField';

interface FormikFieldProps {
	name: string;
	label: string;
	required?: boolean;
	type?: string;
	fullWidth?: boolean;
	autoComplete?: string;
	className?: string;
}	

const FormikField = ({ name, label, required = false, type = 'text', fullWidth = false, autoComplete = "off" }: FormikFieldProps): ReactElement => {
	return (
		<div>
			<Field
				as={TextField}
				name={name}
				label={label}
				required={required}
				type={type}
				fullWidth={fullWidth}
				autoComplete={autoComplete}
				helperText={<ErrorMessage name={name} />}
			/>
		</div>
	);
}

export default FormikField;