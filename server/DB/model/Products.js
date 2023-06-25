const { default: mongoose } = require("mongoose");


const productSchema=new mongoose.Schema({

productName:{
    type : String,
},
price:{
    type : Number,
},
description:{
    type :String,
},
brand:{
    type :String,
},
category:{
    type :String,
},
specifications:[
  {
    title :String,
    value : String
},
  {
    title :String,
    value : String
},
  {
    title :String,
    value : String
},

],
forSale:{
    type : Boolean,
   default:true
},
photos:[
    String
],
createdAt: { type: Date, default: Date.now, trim: true  }


},{timestamps:true})


const productModel=mongoose.model('product',productSchema)


module.exports = {productModel}