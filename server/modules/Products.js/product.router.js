const { addProducts, updateProduct,deleteProduct ,getAllProducts,filterProducts, sortProducts} = require('./controller/productController')

const router=require('express').Router()


// router.route('/:id').patch(updateTour).delete(deleteTour).get(getTour)
router.route('/').post(addProducts).get(getAllProducts)
router.route('/productName').get(filterProducts)
router.route('/sort').get(sortProducts)
router.route('/:id').patch(updateProduct).delete(deleteProduct)



module.exports = router