import type {SacramentMeeting} from '../lib/types';

interface MeetingCardProps{
  meeting:SacramentMeeting;
}

export function MeetingCard({meeting}:MeetingCardProps){
    return(
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '8px 0' }}>
    <h3>Meeting Date: {meeting.date}</h3>
    <p><strong>Conducting:</strong> {meeting.conducting}</p>
    <p><strong>Announcements:</strong> {meeting.announcements}</p>

    <a href={`/meetings/${meeting.id}`}></a>

    </div>
  );
}
