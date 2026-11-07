import { notFound } from "next/navigation";
import { getMeetingById } from "@/lib/meetings-db";
import { MeetingDetail } from "@/components/MeetingDetail";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MeetingDetailPage({ params }: Props) {
  const { id } = await params;
  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const meeting = getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return (
    <main className="p-4">
      <MeetingDetail meeting={meeting} />
    </main>
  );
}