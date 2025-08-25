import Product from "../components/Home/Product/Product.jsx";
import Receipt from "../components/Home/Product/Receipt.jsx";
function Home() {
    return (
        <header className="home-header z-20 flex w-full  h-full">


            <main className="main-content w-full md:w-2/3   h-full">
                <Product/>
            </main>


            <div className="receipt-content hidden md:block sm:w-1/3  h-full">
                <Receipt />
            </div>



        </header>
    )
}

export default Home;