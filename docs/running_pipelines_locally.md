# Running Pipelines Locally

## Prerequisites

Before running the **Sanity Tests** or **Regression** locally, ensure that you have the following tools installed:

- **Bun**: This is the JavaScript package manager and task runner used in the project.
- **Dependencies**: Ensure all project dependencies are installed.

## Steps to Run Sanity Test Locally

1. **Install Bun and Project Dependencies**:

   First, navigate to the project directory and install the dependencies using Bun:

   ```bash
   cd upex-cypress-demo
   bun install
   ```

2. **Run the Sanity Test**:

   To execute the sanity tests, use the following command. Replace the path with the appropriate file path if needed:

   ```bash
   bun run test:sanity:ci <posix>
   ```

   This will run the sanity test on the specified test file.

## Steps to Run Regression Tests Locally

If you wish to run the **Regression Tests** locally, follow these steps:

1. **Ensure Dependencies Are Installed**:

   Make sure you have installed the project dependencies as described in the previous section.

2. **Run the Regression Pipeline**:

   To execute the Regression Pipeline locally, use the following command:

   ```bash
   bun run test:regression:ci
   ```

   This will run the regression tests as defined in the regression.yml file.

## Notes

Ensure that you have configured any necessary secrets and environment variables (such as Trello credentials or other tokens) before running the tests.
This will mimic the behavior of the CI/CD pipeline, but it will execute on your local machine.
