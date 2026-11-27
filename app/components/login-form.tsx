'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSession } from 'next-auth/react';

export function LoginForm() {
  const { data: session } = useSession();
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="space-y-5">
      {session?.user?.name && (
        <p className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">
          Signed in as <span className="font-semibold">{session.user.name}</span>
        </p>
      )}

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-slate-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950/20"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-slate-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="••••••"
          minLength={6}
          required
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950/20"
        />
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-700"
        >
          {errorMessage}
        </div>
      )}

      <button
        aria-disabled={isPending}
        disabled={isPending}
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-blue-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}