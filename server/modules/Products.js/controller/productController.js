const { productModel } = require("../../../DB/model/Products")


// ---------------------------------------------addProduct

const addProducts=async(req,res)=>{


  console.log({s:req.body})

const addProduct=new productModel(req.body)
const saveProduct =await addProduct.save()
res.status(201).json({
    status: 'success',
    data:{
        product:saveProduct
    }
})


}
// ---------------------------------------------------------getAll products

const getAllProducts=async(req,res)=>{

  let page=req.query.page
  if(page == undefined || page<= 0){
  
  page=1
  
  }
  let page_limit=5;
  let skip=(page-1)*page_limit
const products = await productModel.find().skip(skip).limit(page_limit)

res.status(200).json({
    status: 'success',
    data:{
        product:products
    }
})




}
// ---------------------------------------------------------Update product

const updateProduct=async (req,res)=>{

const {id}=req.params

 const findProduct=await productModel.findOne({_id:id})
 if(!findProduct){

    res.status(404).json({
        status: 'error',
        message: 'Product not found',
 
        }) }else{

await productModel.findByIdAndUpdate({_id:id},req.body)
res.status(200).json({
    status: 'success',
  
})

 }
}
// ---------------------------------------------------------delete product

const deleteProduct=async(req, res)=>{
  

    const {id}=req.params

    const findProduct=await productModel.findByIdAndDelete({_id:id})
    if(!findProduct){
   
       res.status(404).json({
       status: 'error',
       message: 'Product not found',

       })
    }else{
   
    await  productModel.findByIdAndDelete({ _id : id })
   res.status(200).json({
       status: 'success',
     
   })
   
    }
}
// ---------------------------------------------------------search  product


const filterProducts=async(req,res)=>{

    const { productName } = req.query;

    try {
      let products;
  
      if (productName) {
        products = await productModel.find({ productName: { $regex: productName, $options: 'i' } });
      } else {
        products = await productModel.find();
      }


      res.status(200).json({
        status: 'success',
        data:{
            product:products
        }
      });    } catch (error) {
      console.error('Error getting products:', error);
      res.status(500).json({ stats: 'Failed to get products' });
    }

}

// ---------------------------------------------------------sorting  product

const sortProducts =async(req,res)=>{


    const { sort } = req.query;

    try {
      let products;
  
      if (sort === 'asc'.trim()) {
        products = await productModel.find().sort({ createdAt: 1 });
      } else if (sort === 'desc') {
        products = await productModel.find().sort({ createdAt: -1 });

      } else {
        products = await productModel.find();

      }
  
      res.status(200).json({
        status: 'success',
        data:{
            product:products
        }
      });
    } catch (error) {
      console.error('Error getting products:', error);
      res.status(500).json({ status: 'Failed to get products' });
    }

}


module.exports = {addProducts,updateProduct,deleteProduct,getAllProducts,filterProducts,sortProducts}