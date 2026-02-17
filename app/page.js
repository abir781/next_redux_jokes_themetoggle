"use client"
import Randomjoker from "./Randomjoker";
import { Provider } from "react-redux";
import store from "./redux_kit/store";

export default function Home() {
  return (
    <Provider store={store}>

           <div className="flex min-h-screen items-center justify-center bg-[url('/rr.jpg')]">
     <div>
      <Randomjoker></Randomjoker>
     </div>
    </div>

    </Provider>
  
  );
}
