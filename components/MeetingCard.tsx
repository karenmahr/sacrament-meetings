import type {SacramentMeeting} from '../lib/types';
import Link from 'next/link';

interface MeetingCardProps{
  meeting:SacramentMeeting;
}

export function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-300 bg-white p-6 text-slate-700 shadow-lg transition hover:shadow-xl">
      <div className="space-y-3">
        <h3 className="border-b border-slate-200 pb-3 text-xl font-extrabold text-blue-950">
          Meeting Date: {meeting.date}
        </h3>

        <p className="text-sm sm:text-base">
          <strong className="font-semibold text-blue-950">Conducting:</strong> {meeting.conducting}
        </p>

        <p className="text-sm sm:text-base">
          <strong className="font-semibold text-blue-950">Announcements:</strong> {meeting.announcements}
        </p>
      </div>

      <div className="mt-5 pt-2">
        <Link
          href={`/meetings/${meeting.id}`}
          className="inline-block rounded-lg bg-blue-950 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2"
        >
          View Details
        </Link>
      </div>
      </div>
  );
}
