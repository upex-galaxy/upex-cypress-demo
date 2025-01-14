# Running Pipelines Locally

## Prerequisites

Before running the **Sanity Tests** or **Regression** locally, ensure that you have the following tools installed:

- **Bun**: This is the JavaScript package manager and task runner used in the project.
- **Dependencies**: Ensure all project dependencies are installed.
- **Secrets**: You must create a .env file in the root directory of your project to store the necessary secrets (e.g., Trello API tokens).

## Steps to Run Sanity Test Locally

1. **Install Bun and Project Dependencies**:

   First, navigate to the project directory and install the dependencies using Bun:

   ```bash
   cd upex-cypress-demo
   bun install
   ```

2. **Create the `.env` File**:

   In the root directory of your project, create a .env file and add the following secrets (replace the placeholders with your actual Trello API tokens):

   ```plaintext
   TRELLO_TOKEN=your_trello_token_here
   TRELLO_KEY=your_trello_key_here
   ```

3. **Run the Sanity Test**:

   To execute the sanity tests, use the following command. Replace the path with the appropriate file path if needed:

   ```bash
   bun run test:sanity:ci <posix>
   ```

   This will run the sanity test on the specified test file.

## Steps to Run Regression Tests Locally

If you wish to run the **Regression Tests** locally, follow these steps:

1. **Ensure Dependencies Are Installed**:

2. **Create the `.env` File** (if you haven't already):

3. **Run the Regression Pipeline**:

   To execute the Regression Pipeline locally, use the following command:

   ```bash
   bun run test:regression:ci
   ```

   This will run the regression tests as defined in the regression.yml file.

## Notes

Make sure to have the necessary secrets configured in your `.env` file in the local environment (like Trello credentials or any other secret) before running the tests.
This will mimic the behavior of the CI/CD pipeline, but it will execute on your local machine.
