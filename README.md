# Inventech - Inventory Management System

## Overview

Inventech is an efficient and user-friendly Inventory Management System designed to streamline product tracking, transaction monitoring, and stock management. The system allows users to effortlessly add products, view transaction history, and manage inventory levels, all through an intuitive interface. Whether you're a small business owner or a manager in a large organization, Inventech helps you maintain control over your products and operations.

## Features

- **Add Products**: Easily add new products to your inventory with details like name, price, and quantity.
- **View Transactions**: Track every transaction made, including sales, purchases, and other actions that impact inventory.
- **Manage Inventory**: Keep track of stock levels, ensuring you’re never out of stock on critical products.
- **Intuitive User Interface**: Clean and modern UI built with Material-UI for a seamless experience.
- **Responsive Design**: The system works well on desktop, tablet, and mobile devices.

## Tech Stack

- **Frontend**: React.js, Material-UI, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Routing**: React Router for client-side navigation
- **State Management**: React hooks (useState, useEffect)

## Installation

Follow the steps below to install and run Inventech locally on your machine:

### Prerequisites

- Node.js and npm (Node Package Manager) installed. You can download Node.js from [here](https://nodejs.org/).
- MongoDB instance running locally or use a cloud service like MongoDB Atlas.

### Clone the Repository

1. Open your terminal/command prompt and run the following command to clone the repository:

    ```bash
    git clone https://github.com/Abdul121104/inventech.git
    ```

2. Navigate into the project directory:

    ```bash
    cd inventech
    ```

### Install Dependencies

The project has two parts: **Frontend** (React) and **Backend** (Node.js). You need to install dependencies for both.

#### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd frontend\vite-project
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

#### Backend

1. Navigate to the backend directory:

    ```bash
    cd ../backend
    ```

2. Install the backend dependencies:

    ```bash
    npm install
    ```

### Configuration

#### MongoDB:

- If you are using MongoDB locally, make sure MongoDB is installed and running.
- If using **MongoDB Atlas**, create a cluster and get the connection string.
- Update the `MONGO_URI` in the `.env` file in the backend directory with your MongoDB connection string.

### Run the Application

1. **Run the Backend**: Navigate to the backend directory and start the server:

    ```bash
    npm start
    ```
    or 
    ```bash
    node server.js
    ```

    This will start the backend server on port `5000` (or whatever port you configure in your `.env` file).

2. **Run the Frontend**: In the frontend directory, run the following command:

    ```bash
    npm run dev
    ```

    This will start the frontend application and open it in your browser. The frontend will communicate with the backend running on `http://localhost:5000`.

### Accessing the Application

Once both the frontend and backend are running, open your browser and navigate to the link where the the local server is running 
