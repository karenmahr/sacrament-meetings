import { LoginForm } from '@/app/components/login-form';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-300 bg-white p-8 shadow-xl">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-blue-950">
            Sign In
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Sign in to create or edit sacrament meeting agendas.
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}