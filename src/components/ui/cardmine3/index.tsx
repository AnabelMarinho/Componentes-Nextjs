import React from "react";

const Cardmine3 = () => {
  return (
    <div className="w-full max-w-[350px] h-auto bg-branco flex flex-col sm:flex-row items-center p-2 rounded-sm shadow-md
    shadow-cinza border-b-4 border-vermelho cursor-pointer hover:bg-[#ec273f]/10 
    transform transition-transform duration-300 hover:scale-105">

      <div className="text-center space-y-1 p-2 sm:max-w-[200px]">
        <h1 className="text-xl text-vermelho font-semibold">Anabel Marinho</h1>
        <p className="text-xs text-vermelho">Desenvolvedora Web</p>
        <p className="text-xs text-cinza">Sou desenvolvedora web, apaixonada por criar sites e aplicações funcionais e responsivas.</p>
      </div>

      <div className="mt-4 sm:mt-0 sm:ml-4">
        <img src="/img/gatoaquarela.png" className="w-[100px] h-[100px] rounded-lg" />
      </div>
    </div>
  );
};

export default Cardmine3;


