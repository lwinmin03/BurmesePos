import {create} from "zustand";

const useSidebarStore = create((set)=>({
    width:window.innerWidth,
    height:window.innerHeight,
    isOpen:false,
    toggleSidebar:()=>set((state)=>({isOpen:!state.isOpen})),
    closeSidebar:()=>set({isOpen:false}),
    setSize:(width,height)=>set((state)=>({width,height,isOpen:width>768 && false})),


}))

export default useSidebarStore;