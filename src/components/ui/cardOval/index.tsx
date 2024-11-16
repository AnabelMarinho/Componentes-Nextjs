import React from "react";

const CardOval = () => {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
     {/* Card Oval 1*/}
    <div className="relative w-full max-w-[150px] h-auto bg-cinza rounded-full shadow-lg shadow-preto p-2 flex items-center justify-center overflow-hidden">
      <p className="text-center text-branco text-sm break-words p-4 z-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus debitis enim inventore porro assumenda ex illum laudantium distinctio, odio iste.
      </p>
      <img 
        src="img/fundo.png" 
        alt="Gato decorativo" 
        className="absolute inset-0 w-full h-full object-cover opacity-69 z-0" 
      />
    </div>

    <div className="relative w-full max-w-[150px] h-auto bg-preto rounded-full shadow-lg shadow-preto p-2 flex items-center justify-center overflow-hidden">
      <p className="text-center text-amarelo text-sm break-words p-4 z-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus debitis enim inventore porro assumenda ex illum laudantium distinctio, odio iste.
      </p>
      <img 
        src="img/fundo2.jpg" 
        alt="Gato decorativo" 
        className="absolute opacity-50 z-0 bottom-0" 
      />
    </div>

    <div className="relative w-full max-w-[300px] h-[150px] bg-preto rounded-full shadow-lg shadow-preto p-4 flex items-center justify-center overflow-hidden">
      <p className="text-center text-branco opacity-80 text-sm break-words z-10">
        Lorem ipsum dolor sit amet conseucimus debitis enim inventore porro assumenda ex illum laudantium distinctio, odio iste.
      </p>
      <img 
        src="img/folhas.png" 
        alt="Folhas decorativas" 
        className="absolute w-[50%] h-auto object-cover opacity-20 z-0 select-none" 
      />
    </div>
    </div>
  );
};

export default CardOval;
