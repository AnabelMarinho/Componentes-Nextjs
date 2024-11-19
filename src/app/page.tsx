"use client"
import Cardmine from "@/components/ui/cardmine";
import Cardmine2 from "@/components/ui/cardmine2";
import Cardmine3 from "@/components/ui/cardmine3";
import CardCircle from "@/components/ui/cardCircle";
import CardVertical from "@/components/ui/cardVertical";
import Card from "@/components/ui/cardResponsivo"; 
import ContainerButtons from "@/components/ui/containerbuttons";
import TextBorder from "@/components/ui/TextBorder";
import CardOval from "@/components/ui/cardOval";
import TerminalEffect from "@/components/ui/TerminalEfect";
import Link from "next/link";

export default function Home() {
  const handleButtonClick = () => {
    alert("Botão clicado!");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 p-5 space-y-10 bg-branco">
    
      <div className="flex gap-3">
        <Link
          href="/SVG"
          className="mt-10 px-6 py-3 bg-rosa text-branco rounded-lg text-lg shadow-md"
        >
          Ir para Página de SVGs
        </Link>

        <Link
          href="/Hero"
          className="mt-10 px-6 py-3 bg-rosa text-branco rounded-lg text-lg shadow-md"
        >
          Hero
        </Link>

        <Link
          href="/Page3"
          className="mt-10 px-6 py-3 bg-rosa text-branco rounded-lg text-lg shadow-md"
        >
          Ir para Página 3
        </Link>
      </div>

    
      <ContainerButtons />
      <Cardmine />

      <div className="w-full flex flex-wrap justify-center gap-5">
        <Cardmine2 />
        <Cardmine3 />
        <CardCircle />
        <CardVertical />

        <div className="flex flex-col">
          <TextBorder />
          <TerminalEffect />
          <CardOval />
        </div>
      </div>

      {/* Adicionando o Componente CardResponsivo */}
      <div className="w-full max-w-md">
        <Card
          title="Meu Card"
          description="Este é um exemplo de descrição para o card adicionado."
          imageUrl="/img/fundo2.jpg"
          buttonText="Clique Aqui"
          onButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
}
