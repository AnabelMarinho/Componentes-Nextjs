import Cardmine from "@/components/ui/cardmine";
import Cardmine2 from "@/components/ui/cardmine2";
import Cardmine3 from "@/components/ui/cardmine3";
import CardCircle from "@/components/ui/cardCircle";
import CardVertical from "@/components/ui/cardVertical";
import ContainerButtons from "@/components/ui/containerbuttons";
import TextBorder from "@/components/ui/TextBorder";

import Link from "next/link";

export default function Home() {
  return (
     <div className="flex flex-col justify-center items-center mt-10 p-5 space-y-10">
        <Link 
          href="/SVG" 
          className="mt-10 px-6 py-3 bg-rosa text-branco rounded-lg text-lg shadow-md"
        >
          Ir para Página de SVGs
        </Link>

        <ContainerButtons />
        <Cardmine />
        <div className="w-full flex flex-wrap justify-center gap-5">
        <Cardmine2 />
        <Cardmine3 />
        <CardCircle />
        <CardVertical />
        <TextBorder />
        </div>
        
      
    </div>
  );
}

