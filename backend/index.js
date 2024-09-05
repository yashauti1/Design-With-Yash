require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db/db");
const userRoute = require("./routes/userRoute");
const cookieParser = require("cookie-parser");

// Database connection
connection();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "https://design-with-yash.onrender.com",
];

// Example error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({
      message: 'Server error',
      error: err.message // Pass the error message or object
    });
  });
  

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  optionsSuccessStatus: 204,
  credentials: true,
};

app.use(cors(corsOptions));

// Routes
app.use("/api/user", userRoute);

// Server listening
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Application is running successfully on port ${port}`);
});


