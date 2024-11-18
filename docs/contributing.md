## Contribution Guide

### Cloning the Repository

To contribute to this project, you first need to clone the repository to your local machine. Follow these steps:

1. **Fork the Repository**: Go to the GitHub page of the repository and click the "Fork" button to create a copy of the repository under your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using the following command:
	```bash
	git clone https://github.com/your-username/example-react-typescript-app.git
	```
	Replace `your-username` with your GitHub username.

3. **Navigate to the Project Directory**: Change into the project directory:
	```bash
	cd example-react-typescript-app
	```

### Setting Up the Local Development Environment

To set up your local development environment, follow these steps:

1. **Install Dependencies**: Install the necessary dependencies using npm or yarn:
	```bash
	npm install
	```
	or
	```bash
	yarn install
	```

2. **Start the Development Server**: Start the development server to run the application locally:
	```bash
	npm dev
	```
	or
	```bash
	yarn dev
	```

3. **Open the Application**: Open your browser and navigate to `http://localhost:5173` to see the running application.

### Making Changes

1. **Create a New Branch**: Create a new branch for your feature or bug fix:
	```bash
	git checkout -b feature/your-feature-name
	```

2. **Make Your Changes**: Make the necessary changes to the codebase.

3. **Commit Your Changes**: Commit your changes with a meaningful commit message:
	```bash
	git add .
	git commit -m "Add your commit message here"
	```

4. **Push Your Changes**: Push your changes to your forked repository:
	```bash
	git push origin feature/your-feature-name
	```

5. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your forked repository.

### Code Review

Once you have created a pull request, the project maintainers will review your code. They may request changes or approve your pull request. Once approved, your changes will be merged into the main branch.

Thank you for contributing!