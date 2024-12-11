const express = require("express")
const app = express();
const productRouter = require("./product.router")
app.get("/",(req, res)=>{
  res.json("call root")
});

app.use("/api/v1/product",productRouter)

// add my change in development

module.exports = app