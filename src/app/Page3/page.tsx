"use client"
import { useRouter } from 'next/navigation';

export default function Page3() {
    const router = useRouter();
    const handleGoHome = () => {
        router.push('/');
      };
  return (
    
    <main>
     <div className="flex flex-col justify-center items-center mt-10 p-5 space-y-10">
        <button
          onClick={handleGoHome}
          className="mt-10 px-6 py-3 bg-preto text-branco rounded-lg text-lg shadow-md"
        >
          Voltar para a Página Inicial
        </button>
      </div>
       
    
    </main>
  );
}
