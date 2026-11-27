import { Suspense } from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

async function AdminAuthCheck({ children }: { children: React.ReactNode }) {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect('/login');
  }

  return <>{children}</>;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-gray-500">Verificando sesión...</div>}>
      <AdminAuthCheck>{children}</AdminAuthCheck>
    </Suspense>
  );
}