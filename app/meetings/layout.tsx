'use client';
import { Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Nav() {
  const pathname = usePathname();
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/meetings">Meetings</Link>
      <Link href="/meetings/current">Current Meeting</Link>
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