'use client';

import { useActionState } from 'react';
import { updateMeeting, type State } from '@/app/lib/actions';
import type { SacramentMeeting } from '@/app/lib/types';
import { useSession } from 'next-auth/react';

export default function EditMeetingForm({ meeting }: { meeting: SacramentMeeting }) {
  const initialState: State = { message: null, errors: {} };
  const updateMeetingWithId = updateMeeting.bind(null, meeting.id);
  const [state, formAction, isPending] = useActionState(updateMeetingWithId, initialState);
  const { data: session } = useSession();

  return (
    <form action={formAction} className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <span>{session?.user?.name}</span>
      <div>
        <label htmlFor="date" className="mb-2 block text-sm font-medium text-slate-700">
          Date
        </label>
        <input
          id="date"
          name="date"
          type="text"
          defaultValue={meeting.date}
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="date-error"
        />
        <div id="date-error" aria-live="polite" aria-atomic="true">
          {state.errors?.date?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>

      {/* Mismos 12 campos restantes con defaultValue={meeting.campo} y su {state.errors?.campo?.map(...)} */}

      {state.message ? <p className="text-sm text-red-600">{state.message}</p> : null}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Updating...' : 'Update Meeting'}
      </button>
    </form>
  );
}