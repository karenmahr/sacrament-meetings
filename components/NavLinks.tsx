'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

        
export default function NavLinks() {
    const pathname = usePathname();
  return (
    <ul className="flex flex-wrap gap-3 pt-2">
          <li><Link href="/" className={pathname === '/' ? 'rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2' : 'text-gray-500'}>Home</Link></li>
          <li><Link href="/meetings" className={pathname.startsWith('/meetings') ? 'rounded-lg bg-blue-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2' : 'text-gray-500'}>Meetings</Link></li>
        </ul>
  );
}
