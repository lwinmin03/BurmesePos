import {DollarSignIcon, HomeIcon, SettingsIcon, ShoppingCartIcon} from "lucide-react";
import {NavLink} from "react-router-dom";
import  logo from '../../assets/POS LOGO.png'

function Sidebar() {
const navLinks = [
    {id:1,name:"Home",route:'/',icon:<HomeIcon/>},
    {id:2,name:"Sale",route:'/Sale',icon:<DollarSignIcon/>},
    {id:3,name:"Inventory",route:'/Inventory',icon:<ShoppingCartIcon/>},
    {id:4,name:"Setting",route:'/Setting',icon:<SettingsIcon/>}
]
    return (
        <div className="sidebar bg-white h-full shadow-md flex flex-col w-fit">

            <header className="Sidebar-header h-20 flex items-center gap-4 p-3  font-medium  border-b-2 border-b-gray-200">
                <img src={logo} className={`flex  size-14 rounded-full`} alt="logo"/>
                <h2 className={`antialiased text-gray-950 text-2xl hidden md:block`}>BurmesePos</h2>
            </header>


            <main className="sidebar-content p-3 flex flex-col gap-5">

                {navLinks.map(
                    (nav) => (
                        <NavLink
                            key={nav.id}
                            to={nav.route}
                            className={({ isActive }) =>
                                `flex items-center  gap-3 p-3 rounded-sm duration-100 bg-none transition-all ease-in-out ${
                                    isActive ? "bg-gray-100 shadow-sm  border-r-4 border-r-gray-900" : ""
                                }`
                            }
                        >
                            <span>{nav.icon}</span>
                            <span className={`md:flex hidden `}>{nav.name}</span>
                        </NavLink>

                    )
                )}


            </main>



        </div>
    )

}

export default Sidebar;