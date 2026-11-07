'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MeetingLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();    
    return(
        <section>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/meetings">Meetings</Link>
                <Link href="/meetings/current">Current Meeting</Link>
            </nav>
            {children}
        </section>
    );
}