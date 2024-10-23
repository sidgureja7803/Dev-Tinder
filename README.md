# Dev-Tinder

**Dev-Tinder** is a MERN stack-based platform where developers across the world can connect, collaborate, and contribute. Just like the real Tinder, developers can accept or reject connection requests. This project leverages Vite + React for the frontend, MongoDB for the database, and various other technologies to create a smooth user experience.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [How it Works](#how-it-works)
- [E2E Testing](#e2e-testing)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Signup and login functionality using JWT.
- **Profile Management**: Users can edit their profiles, and changes are saved with a toast confirmation message.
- **Feed**: Developers are displayed in a swipeable feed. Users can accept or reject connection requests.
- **Connections**: Users can view their connections and pending connection requests.
- **Connection Requests**: Accept or reject connection requests.
- **Navigation**: Protected routes that redirect users to the login page if not authenticated.
- **Logout**: Users can log out, which clears their session.
- **Real-time Updates**: Navbar updates immediately upon user login/logout.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sidgureja7803/Dev-Tinder.git
   cd Dev-Tinder
   
2.Install dependencies for both frontend and backend:
```bash
  # Frontend (Vite + React)
  cd frontend
  npm install
  
  # Backend (Node.js + Express)
  cd ../backend
  npm install
```
3.Start the development servers:
```bash
# Frontend
cd frontend
npm run dev

# Backend
cd ../backend
npm start
```

## How it Works

## Authentication:
Users can sign up and log in.
Token-based authentication (JWT) is implemented. If a user is not logged in, they are redirected to the login page.


## Profile Management:
After login, users can view and edit their profiles.
Changes are confirmed with a toast message upon saving.


## Feed:
A feed displays other developers in a card format, where users can accept or reject connection requests.
The feed is managed by Redux, and new data is fetched from the backend.

## Connections:
Users can view their connections and connection requests on separate pages.
Users can accept or reject connection requests from the "Connection Requests" page.

## State Management:
Redux is used for managing authentication, feed, and profile states.
React Router DOM is used for navigation and protected routes.

## Technologies Used
**Frontend:**
- Vite + React
- Tailwind CSS for styling
- Daisy UI for UI components
- React Router DOM for navigation
- Axios for API calls
- Redux Toolkit for state management

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose for the database
- JWT for authentication
- CORS for cross-origin resource sharing

**E2E Testing:**
Cypress

## Contributing

1- Fork the repository.

2 - Create a new feature branch:
```bash
Copy code
git checkout -b feature-name
```

3 - Commit your changes:
```bash
Copy code
git commit -m "Add a meaningful commit message"
```
4 - Push to the branch:
```bash
Copy code
git push origin feature-name
```
5 - Create a Pull Request.
