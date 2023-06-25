"use client"
import React from 'react';
import {useState} from 'react'
import axios from 'axios'
export default function Form( { formValues,handleFormSubmit ,updateTable,addItem,handleInputChange,showForm}) {

const [updateProduct,setUpdateProduct]=useState(formValues)
const [s,setS]=useState(showForm)
// handleOnChange===========================================================
console.log({s})
console.log({s:showForm})

 const handleOnChange=(e)=>{
setUpdateProduct(prevState=>{

   return   { ...prevState,[e.target.name]: e.target.value}


}
 )

    }
    // handleSubmit===========================================================
 const handleSubmit=async(e,itemId)=>{
    console.log({itemId})
    e.preventDefault();
    console.log({updateProduct})

  const response = await axios.patch(`http://127.0.0.1:4000/api/v1/${itemId}`,updateProduct);
//  const data =await response.json()
 handleFormSubmit(updateProduct)
 updateTable()
 return updateProduct 
}


  return (
    <>
   
    <form className="w-full "   onSubmit={(e)=>handleSubmit(e,updateProduct._id)} onChange={handleOnChange}> 
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      ID      </label>
      <input readOnly className="disabled appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  defaultValue={updateProduct._id} name='_id'  />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      PRODUCT NAME	      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"   defaultValue={updateProduct.name} name='name'
        //   onChange={handleInputChange}
          />
    </div>
  </div>

  



  <div className="flex flex-wrap -mx-3 mb-6">
    
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      PRICE      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" defaultValue={updateProduct.price} name='price'/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      BRAND	      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" defaultValue={updateProduct.brand} name='brand'/>
     

    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
      DESCRIPTION	
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" defaultValue={updateProduct.description} name='description'/>
    </div>
  </div>

          <button type="submit" className="btn p-3 bg-blue-300 rounded-lg">
            Submit
          </button>
     

</form>
</>
  )
}
