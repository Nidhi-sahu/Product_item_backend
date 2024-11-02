const productSchema = require("../model/productModel");

const createProduct = async (req, res) => {
    const { name, description, price, isRecommended, isBestseller, status } = req.body;
    try {
        const newproduct = new productSchema({
            name, description, price, isRecommended, isBestseller,
            status
        });
        await newproduct.save();
        res.status(201).json({ message: "created successfully" });
    } catch (err) {
        console.error("Error", err);
        res.status(500).json({ message: " error" });
    }
};

//---------------------------------------get------------------------------------------
const getProduct = async (req, res) => {
    try {
        const items = await productSchema.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: "error" });
    }
};

//-------------------------------------update------------------------------------------

const updateProduct = async (req, res) => {
    try {
        const { name, description } = req.body;
        const updatedProduct = await productSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: { name, description }
            },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.send(updatedProduct);
    } catch (error) {
        res.status(400).send(error);
    }
};

//--------------------------------------delete------------------------------------------------------------
const deleteproduct = async (req, res) => {
    try {
        const { _id } = req.params;
        const product = await productSchema.findByIdAndDelete(_id);
        res.json({ message: "product item deleted successfully" });
        console.log(product)
    } catch (err) {
        res.status(500).json({ message: "error" });
    }
};

//---------------------------------------status------------------------------------------------------
const updateProductStatus = async (req, res) => {
    try {
        const { status } = req.body;
        if (!['available', 'unavailable'].includes(status)) {
            return res.status(400).send({ message: 'Invalid status value' });
        }
        const updatedProduct = await productSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: { status }
            },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).send({ message: 'Product not found' });
        }
        res.send(updatedProduct);
    } catch (error) {
        res.status(400).send({ message: 'An error occurred', error });
    }
};


module.exports = { createProduct, getProduct, updateProduct, deleteproduct, updateProductStatus }