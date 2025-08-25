import {RefreshCw} from "lucide-react";
import {useState} from "react";
import ProductCard from "./ProductCard.jsx";
import burmeseFood from "../../../Constant/Products.js";

function Product() {
const [page,setPage] = useState(1);
const  pagePerFood=9
let endIndex=page * pagePerFood;

let startIndex=endIndex-pagePerFood;



const totalPages=Math.ceil(burmeseFood.length/pagePerFood);


    const category=[
        {id:'C00',name:"All"},
        {id:'C01',name:"Breakfast"},
        {id:'C02',name:"Lunch"},
        {id:'C03',name:"Snack"},
        {id:'C04',name:"Drink"},
    ]




    const handlePageChange = (page) => {
        setPage(page);
    }

    const currentProducts=burmeseFood.slice(startIndex,endIndex);


    const [activeCategory,setActiveCategory] = useState('Drink')


    return (
        <div className={`w-full h-full mt-2 px-2 overflow-y-hidden flex flex-col gap-2 `}>

            <header className=" flex h-1/12 w-1/2 sm:w-full  items-center justify-start gap-5">
             <div className={`flex items-center gap-3 max-w-2/3`}>
                 {category.map((category) => (
                     <button className={`px-2 max-w-28 py-2 rounded-sm shadow cursor-pointer 
                        ${activeCategory===category.name ? "bg-gray-900 text-white" : "text-gray-900 bg-white"}`} key={category.id}>{category.name}</button>
                 ))}
             </div>



                <button className={`bg-gray-800 text-white ml-auto cursor-pointer shadow-md px-2 rounded-sm py-2 flex items-center gap-2`}><RefreshCw size={13}/> <span>Refresh</span> </button>
            </header>



            <main className={`min-h-9/12 w-full  overflow-y-scroll sm:overflow-y-hidden mt-2 gap-1 md:gap-2  place-items-center  md:place-items-start  grid-cols-2 grid md:grid-cols-3  lg:grid-cols-4 `}>
                {currentProducts.map((food) => (

                      <ProductCard  name={food.name} price={food.price} key={food.id} />

                ))}


            </main>


            <div className={` h-1/12 paginate Control mt-2 mb-1 flex self-stretch  items-center justify-self-end gap-5  `}>

                <button disabled={page===1} onClick={()=>handlePageChange(page-1)} className={`px-2 bg-white w-28 py-2 rounded-sm shadow cursor-pointer`}>PREV</button>
                <span>{page} of {totalPages}</span>
                <button   onClick={()=>handlePageChange(page+1)} disabled={page===totalPages}    className={`px-2 w-28 py-2 bg-white rounded-sm shadow  cursor-pointer`}>NEXT</button>
            </div>


        </div>
    )
}

export default Product;