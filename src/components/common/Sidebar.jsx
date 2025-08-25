import { DollarSignIcon, HomeIcon, SettingsIcon, ShoppingCartIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/POS LOGO.png';
import useSidebarStore from "../../store/useSidebarStore.js";


function Sidebar() {
const {isOpen,closeSidebar} = useSidebarStore();

    const navLinks = [
        { id: 1, name: "Home", route: '/', icon: <HomeIcon /> },
        { id: 2, name: "Sale", route: '/Sale', icon: <DollarSignIcon /> },
        { id: 3, name: "Inventory", route: '/Inventory', icon: <ShoppingCartIcon /> },
        { id: 4, name: "Setting", route: '/Setting', icon: <SettingsIcon /> }
    ];

    return (
        <div className={`sidebar  bg-white  drop-shadow-xs  h-full shadow-md flex flex-col `}>
            <header className={`Sidebar-header h-20 flex items-center ${isOpen ? "justify-between ": "justify-center"}   gap-4 p-3 font-medium border-b-2 border-b-gray-200`}>
                <img src={logo} className="flex size-14 rounded-full" alt="logo" />
                <button onClick={closeSidebar} className="p-2 md:hidden block cursor-pointer">X</button>
                {/*<h2 className="antialiased text-gray-950 text-2xl hidden lg:block">Pos</h2>*/}
            </header>

            <main className="sidebar-content p-1 flex flex-col gap-5">
                {navLinks.map((nav) => (
                    <NavLink
                        key={nav.id}
                        to={nav.route}
                        className={({ isActive }) =>
                            `flex items-center flex-col p-2  rounded-sm duration-100 transition-all ease-in-out ${
                                isActive ? "bg-gray-100  shadow-sm border-s-4 border-r-gray-900" : ""
                            }      ${isOpen ? "flex flex-row justify-start items-center gap-2 " : ""}`
                        }
                    >
                        <span>{nav.icon}</span>
                        <span className={` ${isOpen ? "block" : "md:flex hidden"}`}>{nav.name}</span>
                    </NavLink>
                ))}
            </main>
        </div>
    );
}

export default Sidebar;
