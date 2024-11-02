const express = require('express');
const router = express.Router();
const {
   createProduct,
   getProduct,
   updateProduct,
   deleteproduct,
   updateProductStatus
} = require('../../controller/productController')

router.post('/post', createProduct);
router.get('/get', getProduct)
router.put('/update/:id', updateProduct)
router.delete('/delete/:_id', deleteproduct)
router.patch('/statusupdate/:id', updateProductStatus)



module.exports = router;