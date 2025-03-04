import React from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { LiaAngleDownSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";


function HeaderBottom() {
    return (
        <div className='hidden lg:block border-t border-[#ccc]'>
            <div className='wrapper flex items-center justify-between'>
                <div className='flex gap-[20px] xl:gap-[25px] items-center text-[14px]'>
                    <div className='px-[28px]  py-[12px]  bg-blue flex items-center text-[#fff]'>
                        <div className='flex items-center justify-between xl:w-[250px] gap-[40px]'>
                            <div className='flex gap-[8px] items-center'>
                                <HiOutlineMenuAlt2 className='text-[24px]' />
                                <span>All Departments</span>
                            </div>
                            <FaAngleDown className='text-[13px]' />
                        </div>
                    </div>
                    <div className='py-[11px] flex items-center gap-[10px]'>
                        <span>Home</span>
                        <LiaAngleDownSolid className='text-[11px]' />
                    </div>
                    <div className='py-[11px] flex items-center gap-[8px]'>
                        <span>Shop</span>
                        <LiaAngleDownSolid className='text-[11px]' />
                    </div>
                    <div className='py-[11px] flex items-center gap-[8px]'>
                        <span>Products</span>
                        <LiaAngleDownSolid className='text-[11px]' />
                    </div>
                    <div className='py-[11px] flex items-center gap-[8px]'>
                        <span>Coupons</span>
                        <LiaAngleDownSolid className='text-[11px]' />
                    </div>
                    <div className='py-[11px] flex items-center gap-[8px]'>
                        <span>Blog</span>
                        <LiaAngleDownSolid className='text-[11px]' />
                    </div>
                    <div className='py-[11px] flex items-center gap-[8px]'>
                        <span>Contact</span>
                        <LiaAngleDownSolid className='text-[11px]' />
                    </div>


                </div>
                <div className='flex items-center gap-[10px]'>
                        <LuPhoneCall  className='text-[22px] text-[#0989ff]' />
                        <p className='text-[14px]'>+(402) 763 282 46</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom