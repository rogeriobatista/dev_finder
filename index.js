require('dotenv').config()

const express = require("express")
const path = require("path")

const userController = require("./src/controllers/users")

const app = express()
const port = process.env.PORT || "8000"

app.get("/", userController);

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`)
});