# Node.js API Guide

## Overview

This project implements a Node.js REST API using **Express** and **TypeORM**. It provides functionality for managing user data, including **registration**, **login**, **user listing**, and **user detail viewing**. It also includes **role-based access control** where Admin and User roles are defined to control access to various endpoints.

---

## Technologies Used

- **Node.js**: JavaScript runtime for coding.
- **Express.js**: for handling HTTP requests.
- **TypeORM**: ORM for interacting with mysql database.
- **mysql**: Database for storing user and role data.
- **JWT**: JSON Web Tokens for authentication.
- **Bcrypt &Express Validator**: For hiding passwords & for input validation.
---

## Setup & Installation

### 1. Clone the repository
```bash
git clone github.com/harsh-patadia/ownai-task
cd ownai-task
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create or update new env variables in `.env` file in the root directory.

### 5. Start the Server
```bash
npm start
```

The server will run on `http://localhost:3000`.
liveurl: https://ownai-task.onrender.com

---

## API Endpoints

### **User Routes**
- **POST /user/register**: Registers a new user.
  - **Body**: `{ name, email, password, role(role id), phone, city(city id), country(country id) }`


- **POST /user/login**: Login user.
  - **Body**: `{ email, password }`

- **GET /user/:id**: View details of a specific user (staff or admin).

### **Admin Routes**
- **GET /admin/users/list**: Lists all users (admin only).
  - **token**: also require token of admin logins.

- **GET /admin/user/view/:userId**: View details of a specific user (admin only).
  - **params**:  `userId` (also require token of admin logins).

### **Public Routes**
- **GET /public/country/dropdown**: Fetches a list of countries.
  - **output**: List of countries.

- **GET /public/city/dropdown/:countryId**: Fetches a list of cities based on the `countryId`.
  - **output**: List of cities for the selected country.

---

## Database Configuration

The application uses **mysql** for storing user data and other related information like roles, countries, and cities.

### **Entities**

- **User**: Stores user details like name, email, phone, role, city, country.
- **Role**: Stores user roles (Admin/Staff).
- **Country**: Stores country details.
- **City**: Stores city details.

The application is set up with **TypeORM** to handle database operations.

---

## Validation

The project uses **express-validator** to validate user input. Common validation tasks include checking if fields are required, ensuring proper formats for email and phone, and ensuring the password meets security criteria.

---

## Error Handling

API uses error handling middleware so errors caught and meaningful messages returned to client. 
Errors include validation errors, database connection issues, and unauthorized access errors.

---

## I took some References from

- [TypeORM Website](https://typeorm.io)
- [TypeORM Select Query Builder](https://typeorm.io/select-query-builder)
- [TypeORM Data Source](https://typeorm.io/data-source)
- [TypeORM Working with Repository](https://typeorm.io/working-with-repository)
- [Express Validator Documentation](https://express-validator.github.io/docs/guides/getting-started)

---