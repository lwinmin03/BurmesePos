import ReceiptList from "./ReceiptList.jsx";

function Receipt() {
return (
    <div className={`w-full bg-white shadow-md h-full`}>
<header className={`text-xl p-2 border-b border-b-gray-300`}>Order Summary</header>
        <ReceiptList/>
    </div>
)
}

export default Receipt;