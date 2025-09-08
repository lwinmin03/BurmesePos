import {Menu, MenuSquareIcon, ShoppingCartIcon, User, UsersIcon} from "lucide-react";
import useSidebarStore from "../../store/useSidebarStore.js";
import useReceiptStore from "../../store/useReceiptStore.js";

function Header() {
const {isOpen,toggleSidebar} = useSidebarStore();
    const receipts = useReceiptStore((state) => state.receipts);

    const totalQuantity = receipts.reduce((sum, item) => sum + item.quantity, 0);

    const toggleCart=useReceiptStore(state => state.toggleCart);


return (
    <header className={`w-full border-b border-b-gray-200 flex items-center bg-white  h-14 md:h-[76px] p-3 `}>

<div className={`flex items-center justify-between w-full`}>
    <button onClick={toggleSidebar}  className={`cursor-pointer border   md:hidden border-gray-200   p-2 flex rounded-sm`}><Menu color={`black`}/></button>
    <input placeholder={`Search...`} className={`hidden sm:block sm:w-2/3 w-2/4 rounded-sm py-1.5 md:py-3 border-gray-300 border p-2 outline-none`} />



    <div className=" items-center hidden md:flex gap-1 border border-gray-200  px-1 py-2 rounded-full justify-between">
     <span className={`px-1`}><User/></span>
        <span className={`hidden md:flex px-1`} >Cashier01</span>
    </div>



    <button  onClick={toggleCart} className="flex relative md:hidden items-center border border-gray-200 cursor-pointer px-1 py-2 rounded-full">
        {/* Badge (cart item count) */}
        <span className="absolute left-7 top-0 bg-red-900 text-white text-sm font-medium font-inter rounded-md px-1">
    {totalQuantity}
  </span>

        {/* Cart Icon */}
        <span  className="px-1">
    <ShoppingCartIcon />
  </span>
    </button>






</div>


    </header>
)
}

export default Header;