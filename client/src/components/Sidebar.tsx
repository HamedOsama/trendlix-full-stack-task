'use client'
import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { HiLightBulb } from 'react-icons/hi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { GiPayMoney } from 'react-icons/gi';
import { AiOutlineProfile } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { LuLayoutDashboard } from 'react-icons/lu';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Sidebar({ children }: Props) {
  const [sidebarData, setSidebarData] = useState({

    Dashboard:'Dashboard',
    Customers:'Customers',
    Products:'Products',
    income:'income',
    Promote:'Promote',
    Help:'Help',


  });
  const [bol, setBol] = useState(false);

  const handleMouseEnter = () => {
    setBol(true);
  };

  const handleMouseLeave = () => {
    setBol(false);
  };

  return (
    <div className="flex ">
      <div
        className="sidebar flex w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between hover:w-60 translate-y-1 duration-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="text-slate-500 mb-10 p-3 rounded-lg inline-block">
              <LuLayoutDashboard size={50} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/" className=" sidebarWords flex flex-row">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <HiLightBulb size={20} />
            </div>
            {bol ? (
              <span className=" ">{sidebarData.Customers}</span>
            ) : null}
          </Link>
          <Link href="/products" className='sidebarWords flex flex-row'>
            <div className="text-slate-500 hover:bg-purple-800 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RiCustomerService2Fill size={20} />
            </div>
            {bol ? (
              <span className=" ">{sidebarData.Products}</span>
            ) : null}
          </Link>
          <Link href="/products" className='sidebarWords flex flex-row'>
            <div className="text-slate-500 hover:bg-purple-800 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <MdProductionQuantityLimits size={20} />
            </div>
            {bol ? (
              <span className=" ">{sidebarData.income}</span>
            ) : null}
            




          </Link>
          <Link href="/products" className='sidebarWords flex flex-row'>
            <div className="text-slate-500 hover:bg-purple-800 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <GiPayMoney size={20} />
            </div>
            {bol ? (
              <span className=" ">{sidebarData.Promote}</span>
            ) : null}
            
          </Link>
          <Link href="/products" className='sidebarWords flex flex-row'>
            <div className="text-slate-500 hover:bg-purple-800 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <AiOutlineProfile size={20} />
            </div>
            {bol ? (
              <span className=" ">{sidebarData.Help}</span>
            ) : null}
            
          </Link>

        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
}
