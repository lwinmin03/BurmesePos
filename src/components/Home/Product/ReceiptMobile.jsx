import ReceiptList from "./ReceiptList.jsx";
import CheckOutCard from "./CheckOutCard.jsx";
import useReceiptStore from "../../../store/useReceiptStore.js";

function ReceiptMobile() {


    const toggleCart=useReceiptStore((state)=>state.toggleCart);
    return (
        <div className={`w-full   bg-white flex flex-col shadow-md h-full overflow-y-auto`}>
            <header className={`text-xl flex p-2 border-b justify-between border-b-gray-300`}>
                <h3>Order Summary</h3>
                <button className={` cursor-pointer  `} onClick={toggleCart}>X</button>

                </header>
            <ReceiptList/>

            <div className="p-2 mt-10">
                <CheckOutCard/>
            </div>
        </div>
    )
}


export default ReceiptMobile