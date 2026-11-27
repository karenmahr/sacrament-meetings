import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMeetingById } from '@/app/lib/meetings-db';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const meeting = await getMeetingById(id);

  if (!meeting) {
    return {
      title: 'Meeting Not Found',
      description: 'The requested sacrament meeting record could not be found.',
    };
  }

return {
    title: `Meeting - ${meeting.date}`, 
    description: `Sacrament meeting minutes and program details.`,
  };
}

export default function EditMeetingPage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Edit Meeting</h1>
    </main>
  );
}