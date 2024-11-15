import React from "react";

const CardCircle = () => {
  return (
    <div className="relative w-full max-w-[350px] h-auto  bg-roxo rounded-lg shadow-lg overflow-hidden z-10">
        <div className="p-6 text-rosa">
        <h2 className="text-xl font-bold">Card Circle</h2>
        <p className="mt-2 text-xs">Este é o conteúdo do card com um circulo dentro.</p>
        </div>
    <div className="absolute -top-6 -right-6 w-16 h-16 bg-rosa rounded-full -z-10"></div>
    </div>
  );
};

export default CardCircle;
