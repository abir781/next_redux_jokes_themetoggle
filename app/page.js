"use client"
import Randomjoker from "./Randomjoker";
import { Provider, useDispatch, useSelector } from "react-redux";

import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { settoggleboolean } from "./redux_kit/Feature";

export default function Home() {
  const togglesstate= useSelector((state)=>state.jokex.toggleboolean);
   const dispatch = useDispatch();
  const handletoggle=()=>{
    
     console.log('jdjdf');
     dispatch(settoggleboolean())

  }
  return (
    

           <div className={togglesstate ? "bg-[url('/spot.jpg')]":"bg-[url('/rr.jpg')]"} >
              
           <div className="pt-10 pr-12 flex justify-end">

                
                 

                 {

                  togglesstate ? <FaToggleOn onClick={handletoggle} className="text-white"  size={32} />: <FaToggleOff onClick={handletoggle} className="text-white"  size={32}/>



                 }
           
           </div>
     <div className="flex min-h-screen items-center justify-center">
      <Randomjoker></Randomjoker>
     </div>
    </div>

  
  
  );
}
