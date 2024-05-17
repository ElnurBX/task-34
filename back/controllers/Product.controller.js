const { Product } = require("../models/Product.model")

const ProductController = {
    getAll: async (req, res) => {
        try {
            const items = await Product.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Product.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newBlog = new Product({ ...req.body })
            await newBlog.save()
            const items = await Product.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Product.findByIdAndDelete(id)
            const items = await Product.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Product.findByIdAndUpdate(id, { ...req.body })
            const items = await Product.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { ProductController }