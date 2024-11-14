import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
	useAppSelector,
	useAppDispatch,
} from "../../../../hooks/redux-typed-hooks";
import { selectUserById, createNewUser, updateUser } from "../../store/usersSlice";
import FormikField from "../../../../components/Forms/FormikField";
import CustomButton from "../../../../components/Button/Button";

const StyledFormContainer = styled(Paper)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	justifySelf: "center",
	height: "auto",
	width: "450px",
	padding: "50px",
	"& .form-row": {
		width: "100%",
		marginBottom: "10px",
	},
	"& .form-buttons-row": {
		display: "flex",
		justifyContent: "space-between",
		marginTop: "20px",
	},
	"& .form-buttons-row div": {
		width: "100%",
	},
	"& .invalid-feedback": {
		color: "red",
		fontSize: "0.8em",
	},
	"& .form-control": {
		width: "100%",
	},
	"& .form-control.is-invalid": {
		borderColor: "red",
	},
	"& .form-row .MuiFormControl-root": {
		width: "100%",
	},
});

const UserForm = () => {
	const { id: paramId } = useParams<{ id: string }>();
	const id = parseInt(paramId);
	const history = useHistory();
	const isEditMode = id;
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => selectUserById(state, id));
	const initialValues = user ?? { name: "", email: "", username: "" };

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.trim()
			.min(2, "Must be at least 2 characters")
			.required("Name is required"),
		email: Yup.string().email("Email is invalid").required("Email is required"),
		username: Yup.string()
			.trim()
			.min(3, "Must be at least 3 characters")
			.required("Username is required"),
	});

	function onSubmit(
		fields: { name: string; email: string; username: string },
		{
			setStatus,
			setSubmitting,
		}: {
			setStatus: (status?: string) => void;
			setSubmitting: (isSubmitting: boolean) => void;
		}
	) {
		setStatus();
		if (isEditMode) {
			editUser(id, fields, setSubmitting);
		} else {
			createUser(fields, setSubmitting);
		}
	}

	function createUser(
		fields: { name: string; email: string; username: string },
		setSubmitting: (isSubmitting: boolean) => void
	) {
		dispatch(createNewUser(fields.name, fields.email, fields.username));
		setSubmitting(true);
		history.push("/users");
	}

	function editUser(
		id: number,
		fields: { name: string; email: string; username: string },
		setSubmitting: (isSubmitting: boolean) => void
	) {
		dispatch(updateUser(id, fields.name, fields.email, fields.username));
		setSubmitting(true);
		history.push("/users");
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({ errors, touched, isSubmitting }) => {
				const isDisabled =
					isSubmitting ||
					Boolean(errors?.email) ||
					Boolean(errors?.name) ||
					Boolean(errors?.username);

				return (
					<StyledFormContainer>
						<Form>
							<Typography color="primary" variant="h3">
								{isEditMode ? "Edit User" : "Add User"}
							</Typography>

							<div className="form-row">
								<FormikField
									name="name"
									label="Name"
									type="text"
									className={
										"form-control" +
										(errors.name && touched.name ? " is-invalid" : "")
									}
								/>
								<ErrorMessage
									name="name"
									component="div"
									className="invalid-feedback"
								/>
							</div>

							<div className="form-row">
								<FormikField
									name="email"
									label="Email"
									type="text"
									className={
										"form-control" +
										(errors.email && touched.email ? " is-invalid" : "")
									}
								/>
								<ErrorMessage
									name="email"
									component="div"
									className="invalid-feedback"
								/>
							</div>

							<div className="form-row">
								<FormikField
									name="username"
									label="Username"
									type="text"
									className={
										"form-control" +
										(errors.username && touched.username ? " is-invalid" : "")
									}
								/>
								<ErrorMessage
									name="username"
									component="div"
									className="invalid-feedback"
								/>
							</div>

							<div className="form-buttons-row">
								<CustomButton
									variant="contained"
									color="primary"
									type="submit"
									disabled={isDisabled}
								>
									<Typography>Save</Typography>
								</CustomButton>
								<CustomButton
									component={Link}
									to={"/users"}
									variant="contained"
									color="warning"
								>
									<Typography>Cancel</Typography>
								</CustomButton>
							</div>
						</Form>
					</StyledFormContainer>
				);
			}}
		</Formik>
	);
};

export default UserForm;
