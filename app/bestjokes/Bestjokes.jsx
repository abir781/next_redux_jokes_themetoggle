"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setterofalldata, setterofsearch } from '../redux_kit/Search_feature';

const Bestjokes = () => {
    const dispatch = useDispatch();
    const bestjokesdata = useSelector((state) => state.searchx.alldata);
    const searhkeys = useSelector((state)=> state.searchx.searchinitial);

        const [displayJokes, setDisplayJokes] = useState(bestjokesdata);


        

    // useEffect(() => {
    //     fetch("/bestjokes.json")
    //         .then(res => res.json())
    //         .then(data => dispatch(setterofalldata(data)))
    //         .catch(err => console.error(err));
    // }, []);

   const searchthejokes = (e) => {
    console.log("it's working");
  const value = e.target.value;
//   dispatch(setterofsearch(value));

  if (value.trim() === "") {
    // If search is cleared, dispatch all jokes back
       setDisplayJokes(bestjokesdata);
  } else {
    // Otherwise filter based on input
    const filteredJokes = bestjokesdata.filter((singlejoker) =>
      singlejoker.creator.toLowerCase().includes(value.toLowerCase()) 
    );
    setDisplayJokes(filteredJokes);
  }
};
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-10 pb-5 px-4 sm:px-10">
            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                Best Jokes Collection
            </h1>

            <div className='flex justify-center'>

                 <input onChange={searchthejokes} type="search" name="search"   placeholder="Search jokes..." id=""  className="w-full sm:w-80 px-4 py-2 mb-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />


            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayJokes.map((singlejoke, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                    >
                        <p className="text-gray-800 dark:text-gray-100 font-medium mb-3">
                            {singlejoke.joke}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            — {singlejoke.creator}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bestjokes;
