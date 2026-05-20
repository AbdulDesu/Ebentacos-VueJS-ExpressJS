# 🌮 EBEN Taco's – Full-Stack Restaurant Ordering & Management Platform

An elegant, production-grade full-stack web application engineered for streamlined restaurant operations, interactive menu exploration, persistent cart management, and real-time order tracking. This platform seamlessly connects an intuitive user-facing frontend client with a high-performance, type-safe RESTful API architecture.

---

## 🏗️ Architectural & Engineering Highlights

This application has been completely modernized to meet industry software engineering standards, focusing on scalability, strict type-safety, maintainability, and the **DRY (Don't Repeat Yourself)** principle:

- **Native ECMAScript Modules (ESM)**: Fully powered by modern ES Modules instead of legacy CommonJS (`require`). This architecture ensures native asynchronous capabilities, optimized module resolution, and seamless syntactic alignment between the backend service and the frontend framework.
- **Robust Database Migration & Type-Safety**: Successfully migrated the persistence layer from legacy callback-based raw MySQL to an enterprise-grade **PostgreSQL** relational database. Managed entirely via **Prisma ORM**, this layer guarantees compile-time type-safety, automated database connection pooling, and strict relational integrity.
- **Centralized Response Lifecycle**: Implemented a unified `APIHelper` pattern ensuring every single endpoint transmits an immutable, predictable JSON layout schema (`is_ok`, `message`, `data`). This approach removes data-structure ambiguity and simplifies frontend state management.
- **Decoupled Asynchronous Error Propagation**: Eliminated redundant `try-catch` boilerplate across all route handlers by engineering a higher-order asynchronous wrapper utility (`handleErrorAsync`). Unhandled rejections are gracefully intercepted and piped into an Express global centralized error-handling middleware layout.

---

## 🚀 Tech Stack

### Frontend Client
* **Core Framework**: Vue.js (Progressive Component Architecture)
* **State Management**: Vuex
* **HTTP Client**: Axios (configured with modern asynchronous request flows)

### Backend API Service
* **Runtime Environment**: Node.js
* **Application Framework**: Express.js
* **ORM Layer**: Prisma Client (with full Driver Adapters support)
* **Database Driver Core**: Native PostgreSQL Client (`pg` & `@prisma/adapter-pg`)

### Database
* **Database Engine**: PostgreSQL

---

## ✨ Core Product Features

- **Interactive Dynamic Menu**: Multi-criteria client-side searching, categorization tabs, and multi-layered filtering (by menu status, price ranges, and vegetarian/vegan preferences) with paginated rendering.
- **Relational Shopping Cart**: Advanced persistent cart synchronization relying on database-enforced composite keys (`user_id` + `food_id`) protecting transaction accuracy.
- **Transactional Checkout Processing**: Secure checkout pipeline supporting both cash-on-delivery flows and card validation simulation for seamless orders.
- **Real-Time Order Workflow State**: Automated asynchronous synchronization tracking cooking and logistics milestones (*Confirmed*, *Preparing*, *Checking*, *Delivering*, *Delivered*).
- **Reservation Orchestration System**: Localized dynamic calendar booking configuration allowing users to schedule on-site dining tables.

---

## ⚙️ Prerequisites

Ensure the following core runtime environments are active on your local machine before starting the installation:
* **Node.js** (v18.x or newer recommended)
* **PostgreSQL Server** (v15.x or newer initialized and running)

---

## 🛠️ Local Development & Installation Setup

Follow these structured steps to orchestrate and launch a local development copy of the platform.

### 1. Database Configuration
1. Create an empty database cluster named `eben_stand` within your local PostgreSQL instance.
2. Navigate into the `backend` directory and create a pristine environment definition file named `.env`:
   ```env
   DATABASE_URL="postgresql://<your_postgres_user>:<your_postgres_password>@localhost:5432/eben_stand?schema=public"
   PORT=8081
   
### 2. Backend API Service Initiation
```
# Navigate to the API service directory
cd backend

# Install production and development dependencies
npm install

# Apply database migration logs to build the schema architecture automatically
npx prisma migrate dev --name init_schema

# Execute automated database seeding to instantly inject the 42 menu assets and test user roles
npx prisma db seed

# Fire up the live local development engine
npm run dev
```

3. Frontend Client Inception
```
# Navigate to the frontend client directory
cd frontend

# Install client packages
npm install

# Run the live client development engine
npm run serve
```
The client app will launch, typically accessible at http://localhost:8080 or http://localhost:8082 depending on your local ports.

## 👨‍💻 About the Developer

**Abdul Richard** 

A passionate Software Engineer specializing in cross-platform apps. I bridge the gap between intuitive user interfaces and robust backend architectures to deliver innovative solutions. <br>
<br>📫 **Let's Connect:**
* **LinkedIn**: [linkedin.com/in/abdulrichard](https://linkedin.com/abdulrichard)
* **Email**: [Abdul.Richard@outlook.com](mailto:abdul.richard@outlook.com)