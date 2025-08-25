import {Menu, MenuSquareIcon, User, UsersIcon} from "lucide-react";
import useSidebarStore from "../../store/useSidebarStore.js";

function Header() {
const {isOpen,toggleSidebar} = useSidebarStore();


return (
    <header className={`w-full border-b border-b-gray-200 flex items-center bg-white  h-14 md:h-[76px] p-3 `}>

<div className={`flex items-center justify-between w-full`}>
    <button onClick={toggleSidebar}  className={`cursor-pointer border   md:hidden border-gray-200   p-2 flex rounded-sm`}><Menu color={`black`}/></button>
    <input placeholder={`Search...`} className={`hidden sm:block sm:w-2/3 w-2/4 rounded-sm py-1.5 md:py-3 border-gray-300 border p-2 outline-none`} />



    <div className="flex items-center gap-1 border border-gray-200  px-1 py-2 rounded-full justify-between">
     <span className={`px-1`}><User/></span>
        <span className={`hidden md:flex px-1`} >Cashier01</span>
    </div>

</div>


    </header>
)
}

export default Header;