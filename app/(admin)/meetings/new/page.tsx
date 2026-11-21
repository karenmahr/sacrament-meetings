'use client';

import { useActionState } from 'react';
import { createMeeting, type State } from '@/lib/actions';

const initialState: State = { message: null, errors: {} };

export default function CreateProjectForm() {
  const [state, formAction, isPending] = useActionState(createMeeting, initialState);

  return (
    <form action={formAction} className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <label htmlFor="date" className="mb-2 block text-sm font-medium text-slate-700">
           Date
        </label>
        <input
          id="date"
          name="date"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="date-error"
          required
        />
        <div id="date-error" aria-live="polite" aria-atomic="true">
          {state.errors?.date?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="meetingType" className="mb-2 block text-sm font-medium text-slate-700">
           MeetingType
        </label>
        <input
          id="meetingType"
          name="meetingType"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="meetingType-error"
          required
        />
        <div id="meetingType-error" aria-live="polite" aria-atomic="true">
          {state.errors?.meetingType?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="presiding" className="mb-2 block text-sm font-medium text-slate-700">
           Presiding
        </label>
        <input
          id="presiding"
          name="presiding"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="presiding-error"
          required
        />
        <div id="presiding-error" aria-live="polite" aria-atomic="true">
          {state.errors?.presiding?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="conducting" className="mb-2 block text-sm font-medium text-slate-700">
           Conducting
        </label>
        <input
          id="conducting"
          name="conducting"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="conducting-error"
          required
        />
        <div id="conducting-error" aria-live="polite" aria-atomic="true">
          {state.errors?.conducting?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="announcements" className="mb-2 block text-sm font-medium text-slate-700">
           Announcements
        </label>
        <input
          id="announcements"
          name="announcements"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="announcements-error"
          required
        />
        <div id="announcements-error" aria-live="polite" aria-atomic="true">
          {state.errors?.announcements?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="openingHymn" className="mb-2 block text-sm font-medium text-slate-700">
           Opening Hymn
        </label>
        <input
          id="openingHymn"
          name="openingHymn"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="openingHymn-error"
          required
        />
        <div id="date-error" aria-live="polite" aria-atomic="true">
          {state.errors?.date?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="openingPrayer" className="mb-2 block text-sm font-medium text-slate-700">
           Opening Prayer
        </label>
        <input
          id="openingPrayer"
          name="openingPrayer"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="openingPrayer-error"
          required
        />
        <div id="openingPrayer-error" aria-live="polite" aria-atomic="true">
          {state.errors?.openingPrayer?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="wardBusiness" className="mb-2 block text-sm font-medium text-slate-700">
           Ward Business
        </label>
        <input
          id="wardBusiness"
          name="wardBusiness"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="wardBusiness-error"
          required
        />
        <div id="wardBusiness-error" aria-live="polite" aria-atomic="true">
          {state.errors?.wardBusiness?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="stakeBusiness" className="mb-2 block text-sm font-medium text-slate-700">
           Stake Business
        </label>
        <input
          id="stakeBusiness"
          name="stakeBusiness"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="stakeBusiness-error"
          required
        />
        <div id="stakeBusiness-error" aria-live="polite" aria-atomic="true">
          {state.errors?.stakeBusiness?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="sacramentHymn" className="mb-2 block text-sm font-medium text-slate-700">
           Sacrament Hymn
        </label>
        <input
          id="sacramentHymn"
          name="sacramentHymn"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="sacramentHymn-error"
          required
        />
        <div id="sacramentHymn-error" aria-live="polite" aria-atomic="true">
          {state.errors?.sacramentHymn?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="speakers" className="mb-2 block text-sm font-medium text-slate-700">
           Speakers
        </label>
        <input
          id="speakers"
          name="speakers"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="speakers-error"
          required
        />
        <div id="speakers-error" aria-live="polite" aria-atomic="true">
          {state.errors?.speakers?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="closingHymn" className="mb-2 block text-sm font-medium text-slate-700">
           Closing Hymn
        </label>
        <input
          id="closingHymn"
          name="closingHymn"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="closingHymn-error"
          required
        />
        <div id="closingHymn-error" aria-live="polite" aria-atomic="true">
          {state.errors?.closingHymn?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="closingPrayer" className="mb-2 block text-sm font-medium text-slate-700">
           Closing Prayer
        </label>
        <input
          id="closingPrayer"
          name="closingPrayer"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="closingPrayer-error"
          required
        />
        <div id="closingPrayer-error" aria-live="polite" aria-atomic="true">
          {state.errors?.closingPrayer?.map((error: string) => (
            <p className="mt-1 text-sm text-red-600" key={error}>{error}</p>
          ))}
        </div>
      </div>

      {state.message ? <p className="text-sm text-red-600">{state.message}</p> : null}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Saving...' : 'Save Meeting'}
      </button>
    </form>
  );
}