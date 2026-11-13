'use client';
import { Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Nav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Breadcrumb" className="w-full px-4 py-3 sm:px-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
        <li>
          <Link
            href="/"
            className="transition hover:text-white"
          >Home</Link>
        </li>
        <li className="text-slate-300">/</li>
        <li>
          <Link
            href="/meetings"
            className="transition hover:text-white"
          >Meetings</Link>
        </li>
        <li className="text-slate-300">/</li>
        <li>
          <Link
            href="/meetings/current"
            className="transition hover:text-white"
          >Current Meeting</Link>
        </li>
      </ol>
    </nav>
  );
}

export default function MeetingLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Suspense fallback={null}>
        <Nav />
      </Suspense>
      <Suspense fallback={<div>Cargando...</div>}>
        {children}
      </Suspense>
    </section>
  );
}