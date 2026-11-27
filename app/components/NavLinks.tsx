'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
     
export default function NavLinks ({
  userName,
}: {
  userName?: string | null;
}) {
    const pathname = usePathname();
    const { data: session } = useSession();
  return (
    <nav className="flex items-center gap-4">
    <ul className="flex flex-wrap gap-3 pt-2">
        {userName && (
          <li className="text-sm font-medium text-slate-100">
            <span>{userName}</span>
          </li>
          )}
          <li><Link href="/" className={pathname === '/' ? 'rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2' : 'text-slate-100'}>Home</Link></li>
          <li><Link href="/meetings" className={pathname.startsWith('/meetings') ? 'rounded-lg bg-blue-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2' : 'text-slate-100'}>Meetings</Link></li>
        
        {userName && (
          <li>
            <Link
              href="/meetings/new"
              className={
                pathname === '/meetings/new'
                  ? 'rounded-lg bg-blue-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-800'
                  : 'text-slate-100'
              }
            >
              New Meeting
            </Link>
          </li>
        )}
      </ul>
        </nav>
  );
}
