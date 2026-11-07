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
    <div className="grid gap-4">
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