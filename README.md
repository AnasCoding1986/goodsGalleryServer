Backend README
GoodsGallery - Backend
GoodsGallery's backend is a RESTful API built with Node.js, Express.js, and MongoDB. It handles product data, pagination, searching, categorization, sorting, and authentication functionalities.

Features
API for Products: Fetch, search, categorize, and sort products.
Pagination: Efficiently load products with pagination.
Authentication: Google and Email/Password authentication using Firebase.
MongoDB Integration: Product data is stored and managed in MongoDB.
Clean Code: Well-structured and commented code following best practices.
Getting Started
Prerequisites
Node.js
npm or Yarn
MongoDB
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/goodsgallery-backend.git
cd goodsgallery-backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following environment variables:

makefile
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
Seed the database with dummy product data (optional):

bash
Copy code
npm run seed
Start the server:

bash
Copy code
npm start
The API will be running at http://localhost:5000/api.

API Endpoints
GET /api/products: Fetch all products with pagination, searching, and sorting.
GET /api/products/
: Fetch a single product by ID.
POST /api/products: Add a new product (if you implement an API for product insertion).
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in an existing user.
Project Structure
src/: Contains all backend code.
src/models/: Mongoose models for product and user data.
src/routes/: API routes for products and authentication.
src/controllers/: Logic for handling API requests.
src/middleware/: Custom middleware for authentication, error handling, etc.
src/config/: Configuration files for Firebase and MongoDB.
Deployment
You can deploy the backend on platforms like Heroku, AWS, or any cloud service provider.

