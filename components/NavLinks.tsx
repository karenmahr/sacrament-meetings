'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

        
export default function NavLinks() {
    const pathname = usePathname();
  return (
    <ul className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
          <li><Link href="/projects" className={pathname === '/' ? 'font-bold text-blue-600' : 'text-gray-500'}>Home</Link></li>
          <li><Link href="/meetings" className={pathname === '/meetings' ? 'font-bold text-blue-600' : 'text-gray-500'}>Meetings</Link></li>
        </ul>
  );
}
