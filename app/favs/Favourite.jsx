'use client'; 
import React from 'react';
import { useSelector } from 'react-redux';

const Favourite = () => {
    const favouritejk= useSelector((state)=> state.favouritex.favouritejokes);
    console.log(favouritejk);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center p-6">
            
            <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
                
                <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
                    ⭐ Favourite Jokes
                </h2>

                {favouritejk.length === 0 ? (
                    <p className="text-gray-300 text-center">
                        No favourite jokes yet...
                    </p>
                ) : (
                    <div className="space-y-4">
                        {
                            favouritejk.map((singlefav, index) => {
                                return (
                                    <div 
                                        key={index}
                                        className="bg-white/20 border border-white/30 rounded-xl p-4 shadow-md hover:scale-105 transition duration-300"
                                    >
                                        <p className="text-white font-medium leading-relaxed">
                                            {singlefav}
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                )}

            </div>

        </div>
    );
};

export default Favourite;
