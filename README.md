# simple-note

A web-based application designed for quick and easy note-taking.

## About

This application is built with React, and leverages `json-server` to simulate a backend database, providing a full fake REST API for demonstrating CRUD operations.

### Features

- **Writing Notes:** Start typing away your thoughts or tasks with an easy-to-use text interface. Your notes are saved automatically.
- **Updating Notes:** Made a mistake or need to add more details? Easily update any saved note.
- **Deleting Notes:** Keep your notes list tidy by deleting notes you no longer need.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Before running the app, make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/EJ-Lan/simple-note.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Running the Application
To run the application, you need to start both the React development server and the `json-server` that acts as a backend.

1. Start the backend server
   ```sh
   npm run server
   ```
   This starts the `json-server` on port 5000 and watches `db.json` for changes.
2. In a new terminal window, start the React development server:
   ```sh
   npm start
   ```
   This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Accessing the App Online
Prefer to see it in action online? Visit [https://subtle-lamington-4af54c.netlify.app](https://subtle-lamington-4af54c.netlify.app) to access the deployed application. but you must still use `npm run server` to start the mock database and REST API.
