'use client';

import { useActionState } from 'react';
import { createMeeting, type State } from '@/app/lib/actions';
import Link from "next/link";

export default function NewMeetingPage() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(
    createMeeting,
    initialState
  );

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-300 bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
        <h1 className="mb-6 text-3xl font-extrabold text-blue-950">
          Create Meeting
        </h1>
          <Link
            href="/meetings"
            className="text-sm font-semibold text-blue-950 hover:underline"
          >
            &larr; Back to Meetings
          </Link>
        </div>

        <form action={formAction} className="space-y-5">
          {/* Date & Meeting Type */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-slate-700">
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
              />
              {state.errors?.date && (
                <p className="mt-1 text-xs text-red-600">{state.errors.date[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="meetingType" className="block text-sm font-semibold text-slate-700">
                Meeting Type
              </label>
              <select
                id="meetingType"
                name="meetingType"
                defaultValue="sacrament"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
              >
                <option value="regular">Regular</option>
                <option value="testimony">Testimony</option>
                <option value="stake">Stake</option>
                <option value="general">General</option>
                <option value="special">Special</option>
              </select>
              {state.errors?.meetingType && (
                <p className="mt-1 text-xs text-red-600">{state.errors.meetingType[0]}</p>
              )}
            </div>
          </div>

          {/* Presiding & Conducting */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="presiding" className="block text-sm font-semibold text-slate-700">
                Presiding
              </label>
              <input
                id="presiding"
                name="presiding"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
              />
              {state.errors?.presiding && (
                <p className="mt-1 text-xs text-red-600">{state.errors.presiding[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="conducting" className="block text-sm font-semibold text-slate-700">
                Conducting
              </label>
              <input
                id="conducting"
                name="conducting"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
              />
              {state.errors?.conducting && (
                <p className="mt-1 text-xs text-red-600">{state.errors.conducting[0]}</p>
              )}
            </div>
          </div>

          {/* Announcements */}
          <div>
            <label htmlFor="announcements" className="block text-sm font-semibold text-slate-700">
              Announcements <span className="font-normal text-slate-500">(one per line)</span>
            </label>
            <textarea
              id="announcements"
              name="announcements"
              rows={3}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
            {state.errors?.announcements && (
              <p className="mt-1 text-xs text-red-600">{state.errors.announcements[0]}</p>
            )}
          </div>

          {/* Opening Hymn & Opening Prayer */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="openingHymn" className="block text-sm font-semibold text-slate-700">
                Opening Hymn (Number)
              </label>
              <input
                id="openingHymn"
                name="openingHymn"
                type="number"
                required
                placeholder="e.g. 2"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
              />
              {state.errors?.openingHymn && (
                <p className="mt-1 text-xs text-red-600">{state.errors.openingHymn[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="openingPrayer" className="block text-sm font-semibold text-slate-700">
                Opening Prayer
              </label>
              <input
                id="openingPrayer"
                name="openingPrayer"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
              />
              {state.errors?.openingPrayer && (
                <p className="mt-1 text-xs text-red-600">{state.errors.openingPrayer[0]}</p>
              )}
            </div>
          </div>

          {/* Ward & Stake Business Checkboxes */}
          <div className="flex flex-wrap gap-6 pt-1">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <input
                type="checkbox"
                name="stakeBusiness"
                className="h-4 w-4 rounded border-slate-300 text-blue-950"
              />
              Stake Business
            </label>
          </div>

          {/* Sacrament Hymn */}
          <div>
            <label htmlFor="sacramentHymn" className="block text-sm font-semibold text-slate-700">
              Sacrament Hymn (Number)
            </label>
            <input
              id="sacramentHymn"
              name="sacramentHymn"
              type="number"
              required
              placeholder="e.g. 169"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
            {state.errors?.sacramentHymn && (
              <p className="mt-1 text-xs text-red-600">{state.errors.sacramentHymn[0]}</p>
            )}
          </div>

          {/* Speakers */}
          <div>
            <label htmlFor="speakers" className="block text-sm font-semibold text-slate-700">
              Speakers <span className="font-normal text-slate-500">(one per line)</span>
            </label>
            <textarea
              id="speakers"
              name="speakers"
              rows={3}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            />
            {state.errors?.speakers && (
              <p className="mt-1 text-xs text-red-600">{state.errors.speakers[0]}</p>
            )}
          </div>

          {/* Closing Hymn & Closing Prayer */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="closingHymn" className="block text-sm font-semibold text-slate-700">
                Closing Hymn (Number)
              </label>
              <input
                id="closingHymn"
                name="closingHymn"
                type="number"
                required
                placeholder="e.g. 152"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
              />
              {state.errors?.closingHymn && (
                <p className="mt-1 text-xs text-red-600">{state.errors.closingHymn[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="closingPrayer" className="block text-sm font-semibold text-slate-700">
                Closing Prayer
              </label>
              <input
                id="closingPrayer"
                name="closingPrayer"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
              />
              {state.errors?.closingPrayer && (
                <p className="mt-1 text-xs text-red-600">{state.errors.closingPrayer[0]}</p>
              )}
            </div>
          </div>

          {state.message && (
            <p
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2 text-sm font-medium text-red-700"
            >
              {state.message}
            </p>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            <Link
              href="/meetings"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isPending}
              className="cursor-pointer rounded-lg bg-blue-950 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-900 disabled:opacity-50"
            >
              {isPending ? 'Creating...' : 'Create Meeting'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}