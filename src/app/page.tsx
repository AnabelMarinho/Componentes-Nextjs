import Cardmine from "@/components/ui/cardmine";
import Cardmine2 from "@/components/ui/cardmine2";
import ContainerButtons from "@/components/ui/containerbuttons";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 p-5 space-y-10">
      <ContainerButtons />
      <Cardmine />
      <Cardmine2 />
    </div>
  );
}

