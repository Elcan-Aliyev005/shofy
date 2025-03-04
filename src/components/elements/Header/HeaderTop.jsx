import { FiTruck } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";

function HeaderTop() {
    return (
        <div className="bg-[#000] hidden md:block  text-[#fff]">
            <div className="wrapper text-[13px] flex items-center justify-between ">
                <div className="flex items-center gap-[10px]">
                    <FiTruck className="text-[#ffb342] text-[22px]" />
                    <span className="text-[#ccc]">FREE Express Shipping On Orders $570+</span></div>
                <div id="header-dropdowns" className="flex items-center ">
                    <div className=' py-[7px]  flex items-center gap-[7px] border-e border-[#ffffff55] ps-[18px] pe-[14px]' id="lang">
                        <span>English</span>
                        <FaAngleDown className="text-[12px]" />
                    </div>
                    <div className=' py-[7px]  flex items-center gap-[7px] border-e border-[#ffffff55] ps-[18px] pe-[14px]' id="currency">
                        <span>USD</span>
                        <FaAngleDown className="text-[12px]" />
                    </div>
                    <div className=' py-[7px]  flex items-center gap-[7px] border-e border-[#ffffff55] ps-[18px] pe-[14px]' id="settings">
                        <span>Settings</span>
                        <FaAngleDown className="text-[12px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop