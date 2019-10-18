require("dotenv").config();
const express = require("express");
const massive = require("massive");
const {getInventory, createProduct, deleteProduct, updateProduct} = require('./controller');

const app = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected!");
})

const PORT = 5050;

app.get("/api/inventory", getInventory)

app.post("/api/product", createProduct)

app.delete("/api/product/:id", deleteProduct)

app.put("/api/product/:id", updateProduct)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})