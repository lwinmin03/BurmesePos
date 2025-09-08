import Product from "../components/Home/Product/Product.jsx";
import Receipt from "../components/Home/Product/Receipt.jsx";
import useReceiptStore from "../store/useReceiptStore.js";
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


            <div className={`absolute transition-all ease-linear delay-75 h-full right-0 top-0 receipt-content  sm:hidden tran  w-full  ${isCartOpen ? "translate-x-0" :"-translate-x-full" }  h-full`}>
                <button onClick={toggleCart}>CLOSE</button>
                <Receipt />
            </div>




        </header>
    )
}

export default Home;