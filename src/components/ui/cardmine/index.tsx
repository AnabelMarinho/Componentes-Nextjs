import React from "react";

const Cardmine = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
      {/* Card 1 */}
      <div className="w-full max-w-[250px] h-[150px] bg-rosa flex flex-col items-center p-2 rounded-sm shadow-md shadow-cinza transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center mb-2">
          <img
            src="/img/gato2.jpg"
            className="w-[100px] h-[100px] rounded-full shadow-md shadow-cinza"
          />
        </div>
        <div className="text-center">
          <p className="text-xs text-branco">Gato laranja listrado dormindo</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full max-w-[250px] h-[150px] bg-azul flex flex-col items-center p-2 rounded-sm shadow-md shadow-cinza transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center mb-2">
          <img
            src="/img/gato1.jpg"
            className="w-[100px] h-[100px] rounded-full shadow-md shadow-cinza"
          />
        </div>
        <div className="text-center">
          <p className="text-xs text-branco">Gato laranja listrado acordado</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full max-w-[250px] h-[150px] bg-verde flex flex-col items-center p-2 rounded-sm shadow-md shadow-cinza transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center mb-2">
          <img
            src="/img/gato2.jpg"
            className="w-[100px] h-[100px] rounded-full shadow-md shadow-cinza"
          />
        </div>
        <div className="text-center">
          <p className="text-xs text-branco">Gato laranja listrado dormindo</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-full max-w-[250px] h-[150px] bg-laranja flex flex-col items-center p-2 rounded-sm shadow-md shadow-cinza transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center mb-2">
          <img
            src="/img/gato1.jpg"
            className="w-[100px] h-[100px] rounded-full shadow-md shadow-cinza"
          />
        </div>
        <div className="text-center">
          <p className="text-xs text-branco">Gato laranja listrado acordado</p>
        </div>
      </div>
    </div>
  );
};

export default Cardmine;
