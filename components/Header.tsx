import Link from 'next/link'; 
import NavLinks from './NavLinks';
import { Suspense } from "react";
/*importa link que es uncomponente de next, a diferencia del HTML tradicional,
link solo recarga los componentes nuevos al navegar entre paginas*/

async function getCurrentYear() {
    "use cache";

    return new Date().getFullYear();
}

export default function Header() { //declara una funcion de React llamada Header y la exporta por defecto para reutilizarla en otra parte del codigo
     const year = getCurrentYear()
    
    return (
<header className="sticky top-0 z-50 border-b border-slate-300 blue-950 backdrop-blur-md text-slate-200 transition-all">{/*etiqueta semantica que define el encabezado*/}
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"> 
      <div id="header-title" className="flex flex-col">Milcreeck Ward 
      <p>{year}</p>
      </div>
      <nav>
        <Suspense fallback={null}>
          <NavLinks />
        </Suspense>
      </nav>
      {/*en React no se usa class sino className*/}
      <nav className="flex flex-wrap items-center justify-end gap-3 pt-2">
        <ul className="flex flex-wrap gap-1">{/*Tailwind funciona al aplicar clases*/}
        </ul>
      </nav>
      </div>
    </header>
  );
}