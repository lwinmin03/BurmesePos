
function ProductCard({name,price}) {




return (
    <div className={`bg-white overflow-hidden shadow-md w-2/3 md:w-full h-40 flex flex-col justify-around rounded-sm p-2`}>
       <div className={`flex overflow-hidden flex-wrap bg-gray-100  flex-col gap-2`}>
           <h2 className={` font-medium `}>{name}</h2>
           <span className={`font-light `}>{price}</span>
       </div>

       <button className={`bg-gray-900 mt-2 cursor-pointer transition-all px-2 py-1.5 text-white rounded-sm w-full`}>
           Add To Cart
       </button>


    </div>
)
}

export default ProductCard;