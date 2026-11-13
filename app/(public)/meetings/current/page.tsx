import { redirect } from 'next/navigation';
import {getMeetings} from "@/lib/meetings-db";
import { connection } from "next/server";

export default async function CurrentMeetingPage() {
  await connection(); 

  const today = new Date();
  const dayOfWeek = today.getDay(); 
  const sunday = new Date(today);

    sunday.setDate(today.getDate() - dayOfWeek); // roll back to Sunday
    const formattedDate=sunday.toISOString().split('T')[0]; // format as YYYY-MM-DD

    const matchingMeetings= await getMeetings(formattedDate);

    if(matchingMeetings.length>0){
        redirect(`/meetings/${matchingMeetings[0].id}`);
    }
    else{
        redirect(`/meetings`);
    }
}