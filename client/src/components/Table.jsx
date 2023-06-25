'use client';
import {useState} from 'react'
import Form from '../components/Form' 
import AddForm from '../components/AddForm' 
export default function Table({data, formValues,handleInputChange,handleShow,handleFormSubmit,showForm,updateTable,handleAddForm}) {



//   const [click,setClick]=useState(false)
//   =================================================================
//   const handleClick=()=>{
//     setClick(!click);
//   }
  return (


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" suppressHydrationWarning={true}>
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
           <button onClick={handleShow} className='btn bg-green-500 text-white p-2 rounded-lg'>Add</button>
          
          <AddForm         
               formValues={formValues}
               handleInputChange={handleInputChange}
               handleAddForm={handleAddForm}

               />
           {showForm ?<Form 
            formValues={formValues}
            handleFormSubmit={handleFormSubmit}
            updateTable={updateTable}
            addItem={addItem}
            handleInputChange={handleInputChange}
            showForm={showForm}
           /> :''}

        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      
            <tr>
                <th scope="col" className="px-6 py-3">
                   ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Price
                </th>
                <th scope="col" className="px-6 py-3">
                   Brand
                </th>
              
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    For Sole
                </th>
                <th scope="col" className="px-6 py-3">
                </th>
  
            </tr>
        </thead>
        <tbody>
        {data}
        </tbody>
    </table>
</div>

    
    
  )
}

