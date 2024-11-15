import React from "react";

const ContainerButtons = () => {
  return (
    <div className="w-full max-w-[600px] h-auto border-4 border-roxo flex flex-wrap justify-center p-4 gap-2 rounded-sm">
      <button className="bg-roxo px-5 py-2 rounded-sm text-branco hover:bg-azul">Terror</button>
      <button className="bg-roxo px-5 py-2 rounded-sm text-branco hover:bg-azul">Ação</button>
      <button className="bg-roxo px-5 py-2 rounded-sm text-branco hover:bg-azul">Romance</button>
      <button className="bg-roxo px-5 py-2 rounded-sm text-branco hover:bg-azul ">Suspense</button>
      <button className="bg-roxo px-5 py-2 rounded-sm text-branco hover:bg-azul">Comédia</button>
    </div>
  );
};

export default ContainerButtons;
