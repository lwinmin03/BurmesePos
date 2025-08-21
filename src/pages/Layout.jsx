import {useState} from "react";
import LoginPage from "./Login.jsx";
import {Route, Routes} from "react-router-dom";
import Sidebar from "../components/common/Sidebar.jsx";
import Home from "./Home.jsx";
import Sale from "./Sale.jsx";
import Setting from "./Setting.jsx";
import Header from "../components/common/Header.jsx";
import Inventory from "./Inventory.jsx";

function Layout() {

    const [isLoggedIn, setIsLoggedIn] =useState(true);
    return (

        <>
            { isLoggedIn ? <main className={`flex w-screen h-screen`}>
             <div className={`sm:flex-none z-50 w-full sm:w-fit sm:flex h-full`}>
                 <Sidebar/>
             </div>
                <div className={`Main-Content flex h-full overflow-hidden flex-col flex-1`}>
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