// backend/server.js

// Import necessary modules using ES6 import syntax
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config.js";

// Create an Express application
const app = express();

// Set the port number for the server
const port = config.port;

// Use middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Enable JSON parsing for incoming requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.mongodbUri, {});

// Access the MongoDB connection object
const connection = mongoose.connection;

// Set up a callback when the MongoDB connection is open
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// Define routes (to be added later)

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
