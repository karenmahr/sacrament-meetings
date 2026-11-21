import { notFound } from 'next/navigation';
import { getMeetingById } from '@/lib/meetings-db';
import EditMeetingForm from '@/components/EditMeetingForm';
import { Suspense } from 'react';


async function EditMeetingContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meeting = await getMeetingById(Number(id));

  if (!meeting) {
    notFound();
  }

  return <EditMeetingForm meeting={meeting} />;
}

export default function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<p>Loading meeting...</p>}>
      <EditMeetingContent params={params} />
    </Suspense>
  );
}