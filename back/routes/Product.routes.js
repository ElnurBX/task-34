const express = require("express")
const { ProductController } = require("../controllers/Product.controller")
const router = express.Router()

router.get("/", ProductController.getAll)
router.get("/:id", ProductController.getById)
router.post("/", ProductController.add)
router.delete("/:id", ProductController.delete)
router.put("/:id", ProductController.edit)

module.exports = router 