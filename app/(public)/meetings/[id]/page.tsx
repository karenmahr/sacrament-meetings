import { notFound } from "next/navigation";
import { MeetingDetail } from "@/components/MeetingDetail";


type Props = {
  params: Promise<{ id: string }>;
};

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";


export default async function MeetingDetailPage({ params }: Props) {
  const { id } = await params;
  const meetingId = Number(id);
   

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const res = await fetch(`${baseUrl}/api/meetings/${meetingId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      notFound();
    }

    const meeting = await res.json();

  return (
    <main className="p-4">
      <MeetingDetail meeting={meeting} />
    </main>
  );
}