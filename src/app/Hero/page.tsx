"use client"
import Cardmine2 from '@/components/ui/cardmine2';
import { useRouter } from 'next/navigation';

export default function SvgsPage() {
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
       
      {/* Hero 1 - 20% background preto com um card absoluto no meio dos backgrounds */}
      <section className="w-full relative min-h-screen flex items-center bg-amarelo -z-0">
      <div className="bg-preto absolute sm:w-[200px] w-[100px] h-full -z-10"></div>

      <div className=" flex justify-center items-center flex-col-reverse">
          {/* Texto e imagem */}
          <div className='flex flex-col text-center xl:absolute xl:left-[500px] p-2' >
          <h1 className="text-branco mb-3 text-2xl">Hero 1</h1>
          <p className='text-cinza max-w-[600px] mx-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, repellat nesciunt sit reiciendis ratione iure amet, dolor doloribus possimus blanditiis dolores labore veritatis consequatur aliquam quis eligendi error excepturi. Inventore?
          </p>
          <div className='flex justify-center'>
              <img src='/img/gatoaquarela.png' className='w-[100px] h-[100px]' />
          </div>
          </div>

      
          <div className="mb-16 xl:absolute top-[20%] sm:left-[100px] left-2 space-y-2 p-2 ">
          <Cardmine2 />
          <Cardmine2 />
          <Cardmine2 />
          </div>

      </div>
      </section>

       
      



      <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form action="/login" method="POST" className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Seu e-mail"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Sua senha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Não tem uma conta?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </section>
  
    
    </main>
  );
}