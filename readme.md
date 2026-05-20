# 🌮 EBEN Taco's

A full-stack web application designed for the ordering and management system (feel free to adjust this to your app's actual description, e.g., point-of-sales/inventory management) of a Taco stand. This project is built using a Model-View-Controller (MVC) architecture on the backend to ensure scalability, easy maintainability, and a clean code structure.

## 🚀 Tech Stack

**Frontend:**
* Vue.js

**Backend:**
* Express.js (Node.js)
* MVC Design Pattern

**Database:**
* MySQL

## ⚙️ Prerequisites

Ensure the following software is installed on your local machine before running the application:
* [Node.js](https://nodejs.org/)
* MySQL Server (such as XAMPP, DBeaver, or MySQL Workbench)

## 🛠️ Local Setup

Follow the steps below to run the application locally on your machine.

### 1. Database Configuration
1. Open your MySQL client and create a new database.
2. Import the `eben_stand.sql` file located in the root directory of this repository into your newly created database.
3. (Optional) Adjust the database credentials (username, password, database name) in your backend configuration file (usually found in an `.env` or `config.js` file).

### 2. Running the Backend
Open your terminal or command prompt, navigate to the backend folder, and run the following commands:

```bash
cd backend
npm install
npm run dev
# Note: The command above uses nodemon for auto-reloading. 
# If you prefer to run it without auto-reload, use: node index.js