import React from "react";

const CardVertical = () => {
  return (
    <div className="w-full max-w-[250px] h-auto flex flex-col bg-preto rounded-lg shadow-lg overflow-hidden z-10 p-4">
      <div className="flex flex-col items-center flex-grow">
        <img 
          src="/img/gato2.jpg" 
          className="w-[80px] h-[80px] rounded-full shadow-md shadow-preto" 
          alt="Gato" 
        />
        <h1 className="mt-2 text-lg font-bold text-laranja">Gato Laranja</h1>
        <p className="mt-2 p-2 text-center text-xs text-cinza">
          Lorem adipisicing elit. Veniam eius at soluta illo ad enim sapiente.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident velit soluta aspernatur beatae ratione placeat veniam sit quo cum, unde odit error dolores exercitationem eveniet cupiditate, rerum corrupti explicabo ad.
        </p>
      </div>
      <div className="mt-auto w-full">
        <button className="w-full bg-laranja px-5 py-2 rounded-sm text-branco hover:bg-cinza">
          Ver
        </button>
      </div>
    </div>
  );
};

export default CardVertical;
