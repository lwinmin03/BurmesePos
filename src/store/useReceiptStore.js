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
,isCartOpen:false,
    toggleCart:()=>set((state)=>({isCartOpen:!state.isCartOpen})),
    closeCart:()=>set({isCartOpen:false}),
    isPopupOpen:false,

   openPopup:()=>set({isPopupOpen:true}),
    closePopup:()=>set({isPopupOpen:false}),

}));





export default useReceiptStore;