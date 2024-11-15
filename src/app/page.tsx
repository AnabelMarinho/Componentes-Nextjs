import Cardmine from "@/components/ui/cardmine";
import Cardmine2 from "@/components/ui/cardmine2";
import Cardmine3 from "@/components/ui/cardmine3";
import CardCircle
 from "@/components/ui/cardCircle";
import ContainerButtons from "@/components/ui/containerbuttons";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 p-5 space-y-10">
      <ContainerButtons />
      <Cardmine />
      <div className="w-full flex flex-wrap justify-center gap-5">
      <Cardmine2 />
      <Cardmine3 />
      </div>
      <CardCircle />

    </div>
  );
}

