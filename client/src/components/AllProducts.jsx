"use client"
import React from 'react';
import {useState,useEffect} from 'react'
import Table from './Table'
import Pagination from './Pagination'
import {  getProducts } from '../mongo/page';
import Link from 'next/link';
import axios from "axios";






export default  function AllProducts() {
  const [data,setData]=useState(null);
  const [showForm,setShowForm]=useState(false)
  const [search,setSearch]=useState('')
  const [sort, setSort] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    brand: '',
    description: ''
  });

 

// useEffect==========================================

useEffect(() => {
  fetchData();
}, [search,sort]);
// fetchData==========================================
// `http://127.0.0.1:4000/api/v1/productName?productName=${search}`);

  const fetchData=async()=>{
    const apiUrl = "http://127.0.0.1:4000/api/v1"; // Replace with your API endpoint URL
    let url = `${apiUrl}/sort`;
    if (search) {
      url += `?search=${search}`;
    }
    if (sort) {
      url += `?sort=${sort}`;
    }
  
    try {
      const response = await axios.get(url,
        {headers: {
        'Cache-Control': 'no-cache', // Disable caching
      },
    });
      setData(response.data.data.product);
      return response.data.data.product; 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

// handleInputChange==========================================

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  // handleSortChange==========================================

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;

    // Set the sort state based on the selected value
    if (selectedSort === 'asc' || selectedSort === 'desc') {
      setSort(selectedSort);
    }
  };

const handleAddForm=(res)=>{



  setData([...data,res.data.data.product])

  setFormValues({
    name: '',
    price: '',
    brand: '',
    description: ''
  }); 

}


  const handleFormSubmit = async (productValue) => {

console.log({productValue})

  };




  // updateTable==========================================================
const updateTable=()=>{

  fetchData()

}


// deleteItem==========================================================
const deleteItem=async (itemId)=>{
   await axios.delete(`http://127.0.0.1:4000/api/v1/${itemId}`);
   updateTable()
}
// updateItem==========================================================
  const updateItem = async (itemId) => {
    console.log({itemId})
     const findProduct= data.find((bitByBit)=>{

      return bitByBit._id === itemId
    })
    setFormValues({
      _id:   findProduct?._id   ,
      name : findProduct?.productName,
      price : findProduct?.price,
      description : findProduct?.description,
      brand : findProduct?.brand,

    })
    handleShow()

  };
// // handleSearch==========================================================

const handleSearch=async (e)=>{
  setSearch(e.target.value)
}
const handleSubmitSearch = async (e) => {
  e.preventDefault();

  try {
    const searchData = await fetchData();
    console.log('Search data:', searchData);
   

    // Search the word in the database
    const response = await axios.get(`http://127.0.0.1:4000/api/v1/productName?productName=${search}`);
    const searchResults = response.data;
    setData(response.data.data.product);

    console.log('Search results:', searchResults);
    // Process the search results or update the state with the retrieved data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};



// // handleShow==========================================================
const handleShow=()=>{
console.log({showForm})
  setShowForm(!showForm)
}

// renderedData====================================================================
const renderedData= data? (data.map((bit,index)=>{

// console.log(bit.brand)
return < >
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={`${bit._id} ${index}`} >
              {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
              </th> */}
              <td className="px-6 py-4">
              {bit._id}
              </td>
              <td className="px-6 py-4">
              {bit.productName}
              </td>
              <td className="px-6 py-4">
              {bit.price}
              </td>
              <td className="px-6 py-4">
              {bit.brand}
              </td>
           
              <td className="px-6 py-4">
              {bit.description}
              </td>
    
              <td className="px-6 py-4">
         <Link  href="#" className={`p-3 ${bit.forSale ?"bg-red-500":"bg-green-500" } rounded text-white`}>{
         
         `${bit.forSale ?"Sold":"Active" }`
         
         }</Link>
              </td>
              <td className="px-6 py-4 flex flex-col gap-1" >
            <button className='btn bg-blue-400 text-white p-2 rounded-lg' onClick={()=>updateItem(bit._id)}>update</button>
            <button className='btn bg-red-400 text-white p-2 rounded-lg' onClick={()=>deleteItem(bit._id)} >delete</button>
              </td>
          </tr>

     
     

</> 

})
):(<p className='bg-green-600 p-3 rounded-lg text-center text-white text-bold'>Loading......</p>)   

  return (
    <>
    
    <div className=" bg-white m-8 rounded-2xl h-full">
 <div className="lg:flex justify-between p-5 sm:flex justify-center">
<div>
 <h1 className="font-bold">All products</h1>   
 <p className="text-green-300 lowercase ">Active Members</p>   
</div>
<div className="flex flex-row  ">
  
    <form onSubmit={handleSubmitSearch}> 
  <div className='lg:flex flex-row me-3'> 

  <div className="lg:me-3 ">

<input value={search} type="text" placeholder='Search...' className="bg-slate-100 p-2 rounded-lg" onChange={handleSearch}  />
        </div>
<div className="bg-slate-100 rounded-lg">
    <span>Short By</span>
<select name="" id="" className="bg-slate-100 p-2 rounded-lg font-bold" value={sort}  onChange={handleSortChange}>
<option value="">Sort By</option>
<option value="asc" >newest</option>
<option value="desc" >oldest</option>

</select>
</div>

  </div>
<button type="submit" className="border-2 border-rose-500  p-2 rounded-lg text-bold  text-black hover:bg-rose-500 hover:transform duration-300 hover:text-white">Search</button>
    </form>
</div>

 </div>

 

<Table  data={renderedData}
formValues={formValues}
handleFormSubmit={handleFormSubmit}
handleShow={handleShow}
showForm={showForm}
updateTable={updateTable}
handleInputChange={handleInputChange}
handleAddForm={handleAddForm}

/>
<Pagination />
    </div>




    </>
  )
}







    // try {
      // const response = await axios.put(`http://127.0.0.1:4000/api/v1/${itemId}`);

      // const updatedData = data.map((item) => {
      //   if (item.id === itemId) {
      //     return { ...item  };
      //   }
      //   return item;
      // });
      // setData(updatedData);
    // } catch (error) {
    //   console.error('Error updating item:', error);
    // }