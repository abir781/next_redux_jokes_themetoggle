'use client'; 
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setjokesboolean, setjokesdata } from './redux_kit/Feature';


const Randomjoker = () => {

    // const[joke,setjoke]=useState(null);
    const dispatch = useDispatch();
    // const [falsyv, setfalsyv] = useState(false);
    const falsyv = useSelector((state)=>state.jokex.jokesboolean);
    const jokesdata = useSelector((state)=>state.jokex.jokesdata)

    const getjoke=()=>{
        // setfalsyv(true);
        dispatch(setjokesboolean())
        console.log("it's working like messi but act like cristiano")
        fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(res=>res.json())
        .then(data=> dispatch(setjokesdata(data.joke))) 
    }
    return (
      <div> 
       
            {
                falsyv ? <p className="text-xl font-semibold text-purple-700 
               bg-white/10 backdrop-blur-md 
               p-6 rounded-xl shadow-lg 
               border border-white/30 
               mb-4">
  {jokesdata}
</p>: <p className="text-xl font-semibold text-purple-700 
               bg-white/10 backdrop-blur-md 
               p-6 rounded-xl shadow-lg 
               border border-white/30 
               mb-4">Click the button below to get a random joke:</p>
            }
            
            
            <div className='flex justify-center'>

                             <button onClick={getjoke} className="px-6 py-3 font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full shadow-lg hover:scale-105 transform transition duration-300 active:scale-95">
                              Get Joke
</button>

            </div>
           

            
         
           
 
            
        </div>
    );
};

export default Randomjoker;