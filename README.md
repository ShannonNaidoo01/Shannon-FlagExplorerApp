# README content
# Flag Explorer App

## Overview
The Flag Explorer App is a web application that displays country flags and provides details about each country. The application consists of a backend API and a frontend UI, both deployed on Azure.

## Backend
The backend is built with Node.js and Express. It provides endpoints to retrieve a list of countries and details about a specific country.

### Endpoints
- `GET /countries`: Retrieve a list of countries.
- `GET /countries/:name`: Retrieve details about a specific country.

### Setup
1. Navigate to the backend directory:
    ```sh
    cd backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Run the backend server:
    ```sh
    npm start
    ```
4. Run tests:
    ```sh
    npm test
    ```

## Frontend
The frontend is built with React. It displays country flags in a grid layout and shows details about a selected country.

### Setup
1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Run the frontend application:
    ```sh
    npm start
    ```
4. Run tests:
    ```sh
    npm test
    ```

## Deployment
The application is deployed on Azure using GitHub Actions. The deployment workflow is defined in the `.github/workflows/deploy.yml` file.

### Azure Resources
- Resource Group: `FlagExplorerRG`
- Backend App Service: `flag-explorer-backend` (West US)
- Frontend App Service: `flag-explorer-frontend` (West US)
- App Service Plan: `FlagExplorerPlan`

### GitHub Secrets
The following secrets are used for deployment:
- `AZURE_CLIENT_ID`
- `AZURE_CLIENT_SECRET`
- `AZURE_TENANT_ID`
- `AZURE_WEBAPP_PUBLISH_PROFILE_BACKEND`
- `AZURE_WEBAPP_PUBLISH_PROFILE_FRONTEND`

### Deployment Steps
1. Push changes to the `main` branch or trigger the workflow manually.
2. The GitHub Actions workflow will:
    - Checkout the code.
    - Log in to Azure.
    - Set up Node.js.
    - Install dependencies and run tests for both backend and frontend.
    - Build the frontend.
    - Copy the frontend build to the backend.
    - Deploy the backend and frontend to Azure.

## URLs
- Backend: [https://flag-explorer-backend.azurewebsites.net/](https://flag-explorer-backend.azurewebsites.net/)

## Example
When you visit the backend URL, you will see a grid of country flags. Clicking on a flag will display details about the selected country, such as its name, population, and capital.

Example:
- Country: French Guiana
- Population: 254541
- Capital: Cayenne

