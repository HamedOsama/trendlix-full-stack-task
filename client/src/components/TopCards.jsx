import { getProducts } from '@/mongo/page'
import React from 'react'
import {AiOutlineUsergroupAdd} from'react-icons/ai'
export default async function TopCards() {
    const data=await getProducts()
    console.log()
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4  m-8">
<div className="bg-white flex justify-between w-full border p-4 rounded-lg">

<div className="flex flex-col w-full pb-4 justify-self-end">
    <p className="text-gray-600 text-bold">All Products</p>
    <p className="text-2xl font-bold">5455</p>
</div>
<p className='bg-green-200 flex justify-center items-center p-4 rounded-2xl'>
    <span className="text-green-700 text-2xl "><AiOutlineUsergroupAdd /></span>
</p>
</div>


    </div>
  )
}
