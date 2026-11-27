import Link from 'next/link'; 
import NavLinks from './NavLinks';
import { Suspense } from "react";
import { auth } from '@/auth';

export function getFormattedDate(): string {
  return new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default async function Header() { 
    const session = await auth();
    const user = session?.user;
    const year = await getFormattedDate();
    
    return (
<header className="sticky top-0 z-50 border-b border-slate-300 blue-950 backdrop-blur-md text-slate-100 transition-all">
      <div className="mx-auto flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"> 
      <div id="header-title" className="flex flex-col">Milcreeck Ward 
      <p>{year}</p>
      </div>
      <nav className="flex flex-wrap items-center justify-end gap-3 pt-2 ">
        <Suspense fallback={null}>
          <NavLinks userName={session?.user?.name} />
        </Suspense>
  
      </nav>
      </div>
    </header>
  );
}