# CRUD-API Project Overview & Testing Workflow

## 🧩 Components Overview

### **Client (Frontend)**

- **AddUser/**
  - `Add.jsx`: Form for adding a new user.
  - `AddApi.jsx`: API utility for POST /add.
- **EditUsers/**
  - `Edit.jsx`: Form for editing a user.
  - `UpdateApi.jsx`: API utility for POST /edit/:id.
  - `EditApi.jsx`: (stub)
- **ReadUsers/**
  - `Read.jsx`: Table of all users.
  - `ReadApi.jsx`: API utility for GET /read.
  - `table.jsx`: Renders a user row with Edit/Delete.
- **DeleteUser/**
  - `DeleteApi.jsx`: API utility for POST /delete.
- **Pages/**
  - `Home.jsx`: Welcome/landing page.
  - `Navbar.jsx`: Navigation bar.
  - `MatchAllRoute.jsx`: 404 fallback.

### **Server (Backend)**

- **Routes/**
  - `AddHandler.js`: Handles POST `/add` (add user)
  - `ReadHandler.js`: Handles GET `/read` (fetch all users)
  - `EditHandler.js`: Handles GET `/edit/:id` (fetch single user)
  - `UpdateHandler.js`: Handles POST `/edit/:id` (update user)
  - `DeleteHandler.js`: Handles POST `/delete` (delete user)
  - `LoginHandler.js`, `RegisterHandler.js`: Auth routes
- **Modals/**
  - `UserDetails.js`: Mongoose schema/model for user data
- **index.js**: Main server entry point, sets up Express, connects routes and DB

---

## 🧪 Playwright E2E Tests

- Located in `client/e2e/crud.spec.cjs`
- Covers:
  1. Create User
  2. Read All Users
  3. Edit User
  4. Delete User
  5. Full CRUD Flow (unique user, edit, delete)
- Tests interact with the real UI and trigger all API endpoints.

---

## 🟠 Keploy Contract Testing Workflow

### **1. Record API Calls**

#### **Frontend (from `client/`):**

1. Start the frontend:
   ```sh
   npm run dev
   ```
2. In another terminal, record Playwright-driven API calls:
   ```sh
   keploy record -c "npm run test:e2e" --proxyPort 16789 --dnsPort 26789
   ```

#### **Backend (from `VirtualCPR/server/`):**

1. Start the backend:
   ```sh
   node index.js
   ```
2. In another terminal, record backend API calls:
   ```sh
   keploy record -c "node index.js" --proxyPort 36789 --dnsPort 46789
   ```

---

### **2. Generate OpenAPI Schemas**

After recording, generate schemas in both directories:

- **From `client/` directory:**
  ```sh
  keploy contract generate
  ```
- **From `VirtualCPR/server/` directory:**
  ```sh
  keploy contract generate
  ```

This will create OpenAPI schemas based on the recorded traffic.

---

### **3. Run Consumer-Driven Contract Test**

- **From `client/` directory:**
  ```sh
  keploy contract test --driven "consumer"
  ```
- This will compare the consumer (frontend) contract against the provider (backend) schema for compatibility.

---

## 📄 **Summary of Key Commands**

- **Frontend Keploy record:** See `client/command.txt`
- **Backend Keploy record:** See `VirtualCPR/server/command.txt`
- **Generate schemas:** `keploy contract generate` (run in both client and server)
- **Consumer-driven contract test:** `keploy contract test --driven "consumer"` (run in client)
- **Run Playwright tests:** `npm run test:e2e`

---

## 📝 **Typical Workflow**

1. Start backend and frontend.
2. Record API calls with Keploy while running Playwright tests.
3. Generate OpenAPI schemas in both client and server.
4. Run consumer-driven contract test from the client.
5. Review results and iterate as needed.

---

For more details, see the `command.txt` files in each directory or the Keploy documentation.
