"use client"; 

import { useState } from "react";
import { Contact, HouseIcon, Menu, User, X, BadgeCheck, File} from "lucide-react";

export default function NavbarScroll() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", window.location.pathname); 
    }
    setIsOpen(false); 
  };

  return (
    <>
      <nav className="bg-preto text-branco p-4 fixed top-0 left-0 w-full z-50 h-16 flex items-center shadow-xl">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
           
            <p className="hidden sm:flex">Logo Nome</p>
          </div>

          <div className="md:flex space-x-2 hidden">

            <button onClick={() => scrollToSection("idSessao1")} className="hover:text-rosa transition rounded px-3 py-1">Link</button>
            <button onClick={() => scrollToSection("idSessao2")} className="hover:text-rosa transition rounded px-3 py-1">Link</button>
            <button onClick={() => scrollToSection("idSessao3")} className="hover:text-rosa transition rounded px-3 py-1">Link</button>
            <button onClick={() => scrollToSection("idSessao4")} className="hover:text-rosa transition rounded px-3 py-1">Link</button>
            <button onClick={() => scrollToSection("idSessao5")} className="hover:text-rosa transition rounded px-3 py-1">Link</button>
          </div>

         
          <div className="md:hidden flex">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

     
      <div className={`bg-preto fixed text-branco w-[250px] top-0 right-0 h-full shadow-md p-4 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}>
        <button onClick={() => setIsOpen(false)} className="w-full p-2">
          <X className="w-5 mb-5" />
        </button>
        <div className="flex flex-col justify-center items-center flex-grow">
          {[
            { href: "idSessao1", icon: <HouseIcon />, text: "Link" },
            { href: "idSessao2", icon: <BadgeCheck />, text: "Link" },
            { href: "idSessao3", icon: <File />, text: "Link" },
            { href: "idSessao4", icon: <Contact />, text: "Link" },
            { href: "idSessao5", icon: <User />, text: "Link" },
          ].map(({ href, icon, text }) => (
            <button
              key={href}
              onClick={() => scrollToSection(href)}
              className="flex items-center p-2 cursor-pointer hover:text-amarelo rounded my-2 font-oswald"
            >
              {icon}
              <span className="ml-2">{text}</span>
            </button>
          ))}
        </div>


        <div className="absolute bottom-20 left-[45px]">
          <img src="/img/gato1.jpg" alt="Logo" className="w-[160px] h-[160px] rounded-full opacity-45" />
        </div>
      </div>
    </>
  );
}
