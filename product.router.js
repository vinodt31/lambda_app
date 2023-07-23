const express = require("express");
const router = express.Router();
const productController = require("./productController.js");

router.get("/",productController.findAll);
router.post("/create",productController.create);


module.exports = router;