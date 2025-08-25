import {create} from "zustand";

const useReceiptStore=create((set)=>({
    receipts:[],
    addProduct: (receipt) =>




        set((state) => {
            const index = state.receipts.findIndex((r) => r.name === receipt.name);
            if (index !== -1) {

                const updated = [...state.receipts];
                updated[index] = { ...updated[index], ...receipt };
                return { receipts: updated };
            } else {

                return { receipts: [...state.receipts, receipt] };
            }
        })


}));





export default useReceiptStore;