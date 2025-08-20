import {User, UsersIcon} from "lucide-react";

function Header() {
return (
    <header className={`w-full border-b border-b-gray-200 flex items-center bg-white  h-14 md:h-[76px] p-3 `}>

<div className={`flex items-center justify-between w-full`}>
    <input placeholder={`Search...`} className={`w-2/3  md:w-1/3 rounded-sm py-1.5 md:py-3 border-gray-300 border p-2 outline-none`} />


    <div className="flex items-center gap-1 border border-gray-200  px-1 py-2 rounded-full justify-between">
     <span className={`px-1`}><User/></span>
        <span className={`hidden md:flex px-1`} >Cashier01</span>
    </div>
</div>

    </header>
)
}

export default Header;