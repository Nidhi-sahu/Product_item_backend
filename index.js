require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConnect = require("./config/dbConnect")

const path = require("path");

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000'
    methods: ['POST', 'GET', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;
app.use(express.json());
dbConnect();

app.use("/api/v1", require('./route/index'))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
