
## Installation

```bash
$ git clone https://github.com/MahmoudSerag/E-Commerce-App
$ cd E-Commerce-App
$ npm install
```

Create `.env` file, and add [Environment Variables](#environment-variables) to it:

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Environment Variables

1. `PORT`: Specifies the server port number (e.g. `3000`).

2. `MONGO_URI`: Specifies the MongoDB connection URL (e.g. `mongodb://localhost:27020/database_name OR add ur Mongo Cluster URI`)

3. `EMAIL_SERVICE`: gmail

4. `EMAIL_HOST`: smtp.gmail.com

5. `EMAIL_PORT`: 465

6. `EMAIL_SENDER`: `Add ur email (e.g: JohnDoe@example.com)`

7. `EMAIL_PASSWORD`: `Add ur email password (e.g: ddas123gtrqxD)`

8. `JWT_SECRET_KEY`: Specifies the secret key for JWT authentication (e.g. `secretKeyForEducationPlatform12345@$`).

9. `JWT_EXPIRES_IN`: Specifies the JWT expiration time (e.g. `30d`).
10. `STRIPE_SK`: `Add ur stripe secret key`
11. `SERVER_DOMAIN`: Specifies the server-side app domain (e.g. `http://localhost:3000 OR Add ur production server domain`).
# 🧪 Test Configuration - ONLY FOR DEVELOPMENT PURPOSES

# 🚀 Server
PORT=3000
SERVER_DOMAIN="http://localhost:3000"

# 🍃 MongoDB
MONGO_URI="mongodb+srv://letung1227:cOhc9nWMbtGbZtMB@cluster0.ycjjawi.mongodb.net/e-commerce"

# 📧 Email Configuration
EMAIL_SERVICE="gmail"
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT=465
EMAIL_SENDER="le1288834@gmail.com"
EMAIL_PASSWORD="daby raci hkyo zvhk"

# 🔐 JWT Authentication
JWT_SECRET_KEY="sfaklfkjs43rwlk3423ljl6j332sfaklfkjs43rwlk3423ljl6j332"
JWT_EXPIRES_IN="30d"

# 💳 Stripe Secret Key
STRIPE_SK="sk_test_51RJ4uu083LWGZ7ioymkOqmNn8Eje4f04GKMRnsXRqxpjcIP8sZ6nv6zPiOQEjWCPb6FSHyxysag9HaB1BKW08ETz00tS2tl2Jh"

# 📌 NOTE:
# 🔐 These accounts and data are for TESTING purposes in a development environment only.
# ❌ Please DO NOT modify, tamper with, or use for personal purposes.


