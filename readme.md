# **Node.js API Setup Guide**

#### This project is a **REST API** using **Node.js, Express, TypeORM, and MySQL**. It includes **User Registration, Login, Role-based Access, and User Management**.

---

## **1. Install & Setup**

### **Step 1: Clone the Project**

```bash
git clone https://github.com/harsh-patadia/ownai-task
cd ownai-task
```

### **Step 2: Install Dependencies**

```bash
npm install
```

### **Step 3: Configure `.env` File**

configure `.env` file as per your setup:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=
DB_NAME=task_ownAI
```

### **Step 4: Setup Database**

- Start MySQL.
- Create database ( `task_ownAI`).

### **Step 5: start project**

```bash
npm start
```

Your API runs at:

```
http://localhost:3000
```

---

## **2. API Endpoints**

### **User Routes**

**Register User** → `POST /api/register` (name, email, password, phone, role, city, country)
**Login User** → `POST /api/login` (email, password)
**View User Details** → `GET /api/user/:id`(login user id)

### **Admin Routes**

**List All Users** → `GET /admin/users/list` (Admin only) **search(`name or email`), country(`country id`), city((`city id`))**  
**View Specific User** → `GET /admin/user/view/:userId` (Admin only) (ser id)

### **Public Routes**

**Get Countries** → `GET /public/country/dropdown`  
**Get Cities by Country** → `GET /public/city/dropdown/:countryId`(country id)

---

---

## **4. Validation & Security**

- **express-validator**
- **bcryptjs**
- **JWT (JSON Web Token)**
- **Error Handling middelware**

---

## **5. Notes**

- **Use Postman** to test API.
- **Set up MySQL correctly** before running the server.
- **Modify `.env` file** with correct credentials.

## I took some References from

- [TypeORM Website](https://typeorm.io)
- [TypeORM Select Query Builder](https://typeorm.io/select-query-builder)
- [TypeORM Data Source](https://typeorm.io/data-source)
- [TypeORM Working with Repository](https://typeorm.io/working-with-repository)
- [Express Validator Documentation](https://express-validator.github.io/docs/guides/getting-started)

---
