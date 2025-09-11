import Product from "../components/Home/Product/Product.jsx";
import Receipt from "../components/Home/Product/Receipt.jsx";
import useReceiptStore from "../store/useReceiptStore.js";
import ConfirmPopup from "../components/common/ConfirmPopup.jsx";
function Home() {


    const {toggleCart,isCartOpen}=useReceiptStore();
    console.log(isCartOpen);
    return (

        <header className="home-header z-20 flex w-full  h-full">




            <main className="main-content w-full md:w-2/3   h-full">
                <Product/>
            </main>


            <div className="receipt-content hidden md:block sm:w-1/3  h-full">
                <Receipt />
            </div>


            {/*<div className={`absolute transition-all ease-linear delay-100 h-full right-0 top-0 receipt-content  md:hidden  w-full  ${isCartOpen ? "translate-x-0" :"-translate-x-full" }  h-full`}>*/}
            {/*    <button className={`top-2 right-2 cursor-pointer  absolute`} onClick={toggleCart}>X</button>*/}
            {/*    <Receipt />*/}
            {/*</div>*/}




        </header>
    )
}

export default Home;