# Frontend Application for Student Management

This project is a frontend application built with React and configured to communicate with a backend server. It is containerized using Docker and served using Nginx. The application allows users to manage students and their grades through a user-friendly interface.

## Project Structure

- **public/**: Contains static assets for the application.
- **src/**: Contains the main source code for the React application, including components and configuration files.
- **.dockerignore**: Specifies files and directories to exclude when building the Docker image.
- **.gitignore**: Specifies files and directories to exclude from Git version control.
- **Dockerfile**: Defines the instructions to build the Docker image for this frontend application.
- **README.md**: Provides an overview and instructions for the project.
- **nginx.conf.template**: Template configuration file for Nginx, used to route requests to the backend server and serve the React application.
- **package-lock.json**: Automatically generated file that locks the versions of the project’s dependencies.
- **package.json**: Contains metadata about the project, including its dependencies and scripts.

## Key Features

- **Student Management**: Manage student records, including adding, editing, and deleting students.
- **Grade Management**: View and manage grades for individual students.
- **Nginx Configuration**: Uses Nginx to serve the React application and proxy API requests to the backend.

## Prerequisites

- Docker installed on your machine.
- A backend server running and accessible in the same Docker network.

## How to Build and Run

### Building the Docker Image

1. Build the Docker image using the provided Dockerfile:
   ```bash
   docker build -t frontend-app .
   ```

### Running the Container

2. Run the container, ensuring it is connected to the same Docker network as the backend:
   ```bash
   docker run -d --name frontend-app --network your-docker-network -p 8081:80 -e BACKEND_URL="http://studnet-backend:8080" frontend-app
   ```

### Accessing the Application

3. Open your browser and navigate to:
   ```
   http://<host-ip>:8081
   ```

## Notes

- The `BACKEND_URL` environment variable can be used to dynamically specify the backend server URL. Ensure that the backend container is named correctly in the Docker network (e.g., `studnet-backend`).
- The default Nginx configuration assumes the backend API is accessible at `/students/` and related endpoints.

## Troubleshooting

- **Requests Sent to Wrong Port**: Verify the `nginx.conf.template` and ensure the correct `proxy_pass` URL is set.
- **Docker Network Issues**: Ensure both the frontend and backend containers are on the same Docker network.

##
