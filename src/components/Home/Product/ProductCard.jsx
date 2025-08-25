import useReceiptStore from "../../../store/useReceiptStore.js";
import {useState} from "react";


function ProductCard({name,price,quantity}) {
    const[qty,setQty]=useState(0);

const addProduct=useReceiptStore((state)=> (state.addProduct));


return (
    <div className={`bg-white overflow-hidden shadow-md w-full  h-40 flex flex-col justify-around rounded-sm p-2`}>
       <div className={`flex overflow-hidden flex-wrap   flex-col gap-2`}>
           <h2 className={` font-medium `}>{name}</h2>
           <span className={`font-light `}>{price} MMK</span>

       </div>

       <button onClick={()=> {
        const newQty=   qty+1;
        setQty(newQty);
           addProduct({
               name:name,
               quantity:newQty,
               price:price * newQty
           })


       } } className={`bg-gray-900 mt-2 cursor-pointer transition-all px-2 py-1.5 text-white rounded-sm w-full`}>


           {qty===0 ? <span>ADD To Cart</span> : <span>ADD  MORE ({qty}) </span>}
       </button>


    </div>
)
}

export default ProductCard;