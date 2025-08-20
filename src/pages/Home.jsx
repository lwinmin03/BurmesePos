import Product from "../components/Home/Product/Product.jsx";
import Receipt from "../components/Home/Product/Receipt.jsx";
function Home() {
    return (
        <header className="home-header flex w-full  h-full">


            <main className="main-content w-3/4  h-full">
                <Product/>
            </main>


            <div className="receipt-content w-1/4  h-full">
                <Receipt />
            </div>



        </header>
    )
}

export default Home;