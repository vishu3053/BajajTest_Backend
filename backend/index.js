const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
require("dotenv").config();

const PORT = process.env.PORT || 3000;
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});

app.get("/", (req, res) => {
    res.send(`<h1>Welcome to the BFHL API</h1>`);
});
