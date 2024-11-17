"use client"
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
       
      {/* SVG 1 */}
      <section className="w-full relative h-screen flex justify-center items-center bg-preto -z-0">
      <h1 className='text-branco'>SVG 1</h1>
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 490'><defs><linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'><stop stop-color='rgba(70.321, 0, 219, 1)' offset='0%'></stop><stop stop-color='rgba(250, 110, 121, 1)' offset='100%'></stop></linearGradient></defs><path fill='url(%23sw-gradient-0)' d='M0,294L240,245C480,196,960,98,1440,89.8C1920,82,2400,163,2880,220.5C3360,278,3840,310,4320,343C4800,376,5280,408,5760,367.5C6240,327,6720,212,7200,204.2C7680,196,8160,294,8640,351.2C9120,408,9600,425,10080,392C10560,359,11040,278,11520,245C12000,212,12480,229,12960,204.2C13440,180,13920,114,14400,147C14880,180,15360,310,15840,334.8C16320,359,16800,278,17280,269.5C17760,261,18240,327,18720,334.8C19200,343,19680,294,20160,261.3C20640,229,21120,212,21600,179.7C22080,147,22560,98,23040,114.3C23520,131,24000,212,24480,236.8C24960,261,25440,229,25920,196C26400,163,26880,131,27360,138.8C27840,147,28320,196,28800,220.5C29280,245,29760,245,30240,277.7C30720,310,31200,376,31680,375.7C32160,376,32640,310,33120,245C33600,180,34080,114,34320,81.7L34560,49L34560,490L34320,490C34080,490,33600,490,33120,490C32640,490,32160,490,31680,490C31200,490,30720,490,30240,490C29760,490,29280,490,28800,490C28320,490,27840,490,27360,490C26880,490,26400,490,25920,490C25440,490,24960,490,24480,490C24000,490,23520,490,23040,490C22560,490,22080,490,21600,490C21120,490,20640,490,20160,490C19680,490,19200,490,18720,490C18240,490,17760,490,17280,490C16800,490,16320,490,15840,490C15360,490,14880,490,14400,490C13920,490,13440,490,12960,490C12480,490,12000,490,11520,490C11040,490,10560,490,10080,490C9600,490,9120,490,8640,490C8160,490,7680,490,7200,490C6720,490,6240,490,5760,490C5280,490,4800,490,4320,490C3840,490,3360,490,2880,490C2400,490,1920,490,1440,490C960,490,480,490,240,490L0,490Z'/></svg>")`,
        }} />
      </section>

      <section className="w-full relative h-screen flex justify-center items-center bg-roxo -z-0">
        <div
          className="absolute inset-0 bg-no-repeat bg-certer z-10 bg-[length:200%] xl:bg-[length:100%]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' fill='%23000'%3E%3Cpath d='M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z'%3E%3C/path%3E%3C/svg%3E")`,
          }}
        ></div>
      </section>
      
      <section className="w-full relative h-screen flex justify-center items-center bg-preto -z-0">
        <div
        className="absolute inset-0  z-10 bg-[length:200%] xl:bg-[length:100%]"
          style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='currentColor' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
          opacity: "50%",
        }}
        ></div>
      </section>

      <section className="w-full relative h-screen flex justify-center items-center bg-azul">
        <div
          className="absolute inset-0 z-10 bg-[length:200%] xl:bg-[length:100%]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "36px 72px",
            
          }}
        ></div>
      </section>

    
    </main>
  );
}
