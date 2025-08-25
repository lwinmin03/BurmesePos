import {useState} from "react";
import LoginPage from "./Login.jsx";
import {Route, Routes} from "react-router-dom";
import Sidebar from "../components/common/Sidebar.jsx";
import Home from "./Home.jsx";
import Sale from "./Sale.jsx";
import Setting from "./Setting.jsx";
import Header from "../components/common/Header.jsx";
import Inventory from "./Inventory.jsx";
import useSidebarStore from "../store/useSidebarStore.js";

function Layout() {
    const {isOpen}=useSidebarStore();

    const [isLoggedIn, setIsLoggedIn] =useState(true);
    return (

        <>
            { isLoggedIn ? <main className={`flex relative w-screen h-screen`}>
                {/*Large Screen Sidebar*/}
             <div className={` overflow-x-hidden  hidden md:flex bg-black   h-full ` }>
                 <Sidebar/>
             </div>


                <div className={`z-50 overflow-x-hidden absolute  transition-all ease-linear delay-75  md:hidden bg-black   h-full ${isOpen ? 'w-3/4 translate-x-0' : ' -translate-x-36'}` }>
                    <Sidebar/>
                </div>

                <div className={`Main-Content ${isOpen && "blur-xs"} flex h-full overflow-hidden z-40 flex-col flex-1`}>
                <header>
                    <Header/>
                </header>
                    <div className={`  overflow-y-hidden h-full`}>
                        <Routes>
                            <Route path={'/'} index  element={<Home/>}/>
                            <Route path="/Sale" element={<Sale/>} />
                            <Route path="/Setting" element={<Setting/>} />
                            <Route path="/Inventory" element={<Inventory/>} />
                        </Routes>
                    </div>

                </div>


            </main> : <LoginPage/>}

        </>
    )
}

export default Layout