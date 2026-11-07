import Link from 'next/link'; 
/*importa link que es uncomponente de next, a diferencia del HTML tradicional,
link solo recarga los componentes nuevos al navegar entre paginas*/

async function getCurrentYear() {
    "use cache";

    return new Date().getFullYear();
}

export default function Header() { //declara una funcion de React llamada Header y la exporta por defecto para reutilizarla en otra parte del codigo
     const year = getCurrentYear()
    
    return (
    <header className="bg-blue-600 text-white py-4 shadow-md">{/*etiqueta semantica que define el encabezado*/}
      <div id="header-title" className="text-2xl font-bold">Vicente Lopez Ward</div> {/*en React no se usa class sino className*/}
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <ul className="flex gap-6">{/*Tailwind funciona al aplicar clases*/}
          <p>{year}</p>
        </ul>
      </nav>
    </header>
  );
}