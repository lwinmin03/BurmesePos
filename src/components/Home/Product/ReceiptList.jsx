import useReceiptStore from "../../../store/useReceiptStore.js";
import {Minus} from "lucide-react";

function ReceiptList() {
    const receipts=useReceiptStore();
    return(
        <div className={`bg-white  h-3/5`}>


                <li className={`list-none p-2  scroll-auto h-full `}>

                    {/* Column headers */}
                    <div className="flex justify-between  font-semibold py-2 border-b border-gray-200">
                        <span className="flex-1">Name</span>
                        <span className="w-20 text-center">Quantity</span>
                        <span className="w-20 text-right">Price</span>

                    </div>
                    <div className="w-full h-full overflow-y-scroll">


                        {/* Data rows */}
                        {receipts.receipts.map((product) => (
                            <div
                                key={product.name}
                                className="flex justify-between py-2"
                            >
                                <span className="flex-1">{product.name}</span>
                                <span className="w-20 text-center">{product.quantity}</span>
                                <span className="w-20 text-right">{product.price}</span>

                            </div>
                        ))}
                    </div>




                </li>






        </div>
    )
}

export default ReceiptList;