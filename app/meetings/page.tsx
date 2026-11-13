import { Suspense } from "react";
import { MeetingCard } from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";

async function MeetingsList() {
  const res = await fetch("http://localhost:3000/api/meetings", {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const meetings: SacramentMeeting[] = await res.json();

  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-4 md:grid-cols-2 sm:px-6">
      {meetings.map((meeting) => (
        <MeetingCard key={meeting.id} meeting={meeting} />
      ))}
    </div>
  );
}

export default function MeetingsPage() {
  return (
    <Suspense>
      <MeetingsList />
    </Suspense>
  );
}