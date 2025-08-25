import {useEffect} from "react";
import useSidebarStore from "../store/useSidebarStore.js";

function useWindowSize() {
    const setSize= useSidebarStore((state)=>state.setSize);

    useEffect(()=>{
function handleResize(){
    setSize(window.innerWidth,window.innerHeight);
}
window.addEventListener('resize',handleResize);
return ()=>{
    window.removeEventListener('resize',handleResize);
}
    },[setSize]);
}

export default useWindowSize;