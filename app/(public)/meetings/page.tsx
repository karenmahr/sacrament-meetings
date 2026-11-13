import { getMeetings, getMeetingsTotalPages } from '@/lib/meetings-db';
import { MeetingSearch } from '@/components/MeetingSearch';
import { MeetingCard } from '@/components/MeetingCard';
import { Pagination } from '@/components/Pagination';

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

return (
  <div className="mx-auto max-w-5xl space-y-6 px-4 py-4 sm:px-6 bg-slate-300">
    <div className="w-full max-w-md" aria-label="Search meetings">
      <MeetingSearch />
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {meetings.map((m) => (
        <MeetingCard key={m.id} meeting={m} />
      ))}
    </div>
    <div className="text-blue-950" aria-label="Pagination">
      <Pagination totalPages={totalPages} />
    </div>
  </div>
)
};