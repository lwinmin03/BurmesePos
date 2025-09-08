import useReceiptStore from "../../../store/useReceiptStore.js";
import { useState } from "react";

function CheckOutCard() {
    const payMethods = [
        { id: 1, name: "CASH" },
        { id: 2, name: "E MONEY" }
    ];

    const [paymentMethod, setPaymentMethod] = useState("");

    const receipts = useReceiptStore((state) => state.receipts);

    const subTotal = receipts.reduce(
        (sum, item) => sum + item.price ,
        0
    );

    const TaxAmt = subTotal * 0.04; // 4% tax

    return (
        <div className="w-full flex flex-col mt-0.5 gap-3 border-t border-gray-200">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
                <span>Sub Total</span>
                <span>{subTotal} MMK</span>
            </div>

            {/* Tax */}
            <div className="flex justify-between items-center">
                <span>Tax 4%</span>
                <span>{TaxAmt.toFixed(2)} MMK</span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center">
                <span>Total</span>
                <span>{(subTotal + TaxAmt).toFixed(2)} MMK</span>
            </div>

            {/* Payment Method */}
            <div className="flex flex-col p-1 lg:flex-row lg:justify-between lg:items-center">
                <span>Payment Method</span>
                <div className="flex gap-4 items-center">
                    {payMethods.map((method) => (
                        <button
                            key={method.id}
                            onClick={() => setPaymentMethod(method.name)}
                            className={`border p-2 w-fit rounded cursor-pointer border-gray-900 ${
                                paymentMethod === method.name
                                    ? "bg-gray-950 text-white"
                                    : "bg-white text-gray-900"
                            }`}
                        >
                            {method.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <button
                disabled={receipts.length === 0}
                className="w-full bg-gray-900 text-white shadow-sm py-1.5 px-1 cursor-pointer rounded-sm disabled:cursor-not-allowed"
            >
                Invoice Process
            </button>
        </div>
    );
}

export default CheckOutCard;
