import useReceiptStore from "../../store/useReceiptStore.js";

const ConfirmPopup = () => {
const closePopup=useReceiptStore((state)=>state.closePopup);

    return(
        <div className={`w-64 h-fit p-1 bg-white shadow-sm rounded-sm`}>
            <div className="flex p-1 flex-col w-full gap-2 justify-center  items-center">
                <h3 className={`text-xl font-inter font-medium text-center`}>Are u sure u want to order?</h3>
                <div className="flex justify-around w-full">
                    <button onClick={closePopup} className={`bg-red-700 cursor-pointer px-2 py-1 text-white rounded-md`}>Cancel</button>
                    <button className={`bg-green-700 text-white cursor-pointer px-2 py-1 rounded-md`}>Confirm</button>
                </div>
            </div>
        </div>
    )
}


export default ConfirmPopup;