import ReceiptList from "./ReceiptList.jsx";
import CheckOutCard from "./CheckOutCard.jsx";

function Receipt() {
return (
    <div className={`w-full   bg-white flex flex-col shadow-md h-full overflow-y-auto`}>
<header className={`text-xl p-2 border-b border-b-gray-300`}>Order Summary</header>
        <ReceiptList/>

        <div className="p-2 mt-10">
            <CheckOutCard/>
        </div>
    </div>
)
}

export default Receipt;