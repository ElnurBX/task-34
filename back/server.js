const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ProductRouter = require("./routes/Product.routes");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/Product", ProductRouter);


mongoose.connect("mongodb+srv://tu8dhdtwy:elnur123@cluster0.5vyouju.mongodb.net/").then(() => {
    console.log("connected");
});

app.listen(8080, () => {
    console.log("server running on 8080");
});
