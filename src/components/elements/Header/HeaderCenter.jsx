import React from 'react'
import Logo from "../../../assets/img/photos/logo.svg"
import Basket from "../../../assets/img/icons/basket.svg"
import Arrows from "../../../assets/img/icons/arrows.svg"
import { BiSearch } from "react-icons/bi";
import { LiaAngleDownSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";





import Image from 'next/image'
function HeaderCenter() {
    return (
        <div className='py-[15px] xl:py-[27px]'>
            <div className='wrapper flex items-center justify-between'>
                <Image src={Logo} width={"auto"} alt='logo' />
                <div id='search-box' className='border-blue border-[2px]  rounded-[8px] hidden xl:flex items-center'>
                    <input type="text" className='px-[25px] w-[300px] outline-0 ' placeholder='Search for Products...' />
                    <div id='search-box-select' className='flex border-s border-[#ccc] px-[20px] gap-[10px] items-center'>
                        <span className='text-[14px]'>
                            Select Category
                        </span>
                        <LiaAngleDownSolid className='text-[13px]' />

                    </div>
                    <div className='h-[46px] w-[60px] flex-center ms-[10px] bg-[#0989ff] ' id='search-icon'>
                        <BiSearch className='text-[26px] text-[#fff]' />
                    </div>
                </div>
                <div className='flex items-center '>
                    <div className='xl:flex hidden  items-center xl:me-[25px]'>
                        <div className='w-[44px] me-[10px] h-[44px] border border-[#010f1c1a] rounded-full flex-center'>
                            <FaRegUser fill='#55585b' className='text-[22px]' />
                        </div>
                        <div className='hidden xl:flex flex-col'>
                            <span className='text-[12px] pt-[2px] text-[#767A7d]'>Hello, Sign In</span>
                            <p className='text-[14px] pb-[2px]'>Your Account</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[20px] ms-[25px]'>
                        <div className='hidden xl:block'>
                            <Image src={Arrows} width={"22px"} alt='arrow' />
                        </div>

                        <div className='relative hidden xl:block'>
                            <div className='bg-[#fd4b6b] absolute -top-[50%] -right-[50%] flex-center border borde-[#fff] rounded-full w-[23px] h-[23px] text-[#fff] text-[10px] pt-[3px] '>
                                44
                            </div>
                            <GoHeart className='text-[23px]' />
                        </div>
                        <div className='relative'>
                            <div className='bg-[#fd4b6b] absolute -top-[50%] -right-[50%] flex-center border borde-[#fff] rounded-full w-[23px] h-[23px] text-[#fff] text-[10px] pt-[3px] '>
                                99+
                            </div>
                            <Image src={Basket} width={"22px"} alt='basket' />
                        </div>
                        <div className='xl:hidden block'>
                            <CgMenuRight  className='text-[26px]'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderCenter