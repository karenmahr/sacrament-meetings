import type {SacramentMeeting} from '../lib/types';

interface MeetingCardProps{
  meeting:SacramentMeeting;
}

export function MeetingDetail({meeting}:MeetingCardProps){
  const formattedDate = new Date(`${meeting.date}T00:00:00`).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
    return(
      <div className="mx-auto my-4 max-w-3xl rounded-2xl border border-slate-300 bg-white p-6 text-slate-700 shadow-xl sm:p-8">
    <div style={{ border: 'mx-auto my-4 max-w-3xl rounded-2xl border border-slate-300 bg-white p-6 text-slate-700 shadow-xl sm:p-8' }}>
    <h3>Meeting Date: {meeting.date}</h3>
    <p><strong>Type:</strong> {meeting.meetingType}</p>

    <div className="mt-5 flex flex-col space-y-3 rounded-xl bg-slate-100 p-4 text-sm sm:text-base">
      <p className="text-sm sm:text-base"><strong className="font-semibold text-blue-950">Presiding:</strong> {meeting.presiding}</p>
      <p className="text-sm sm:text-base"><strong className="font-semibold text-blue-950">Conducting:</strong> {meeting.conducting}</p>
      <p className="text-sm sm:text-base"><strong className="font-semibold text-blue-950">Announcements:</strong> {meeting.announcements}</p>
    </div>
    <p><strong>Opening Hymn:</strong> #{meeting.openingHymn.number} {meeting.openingHymn.title}</p>
    <p><strong>Opening Prayer:</strong> {meeting.openingPrayer}</p>
        {meeting.wardBusiness.length > 0 ? (
          <ul>
            {meeting.wardBusiness.map((item, index) => (
              <li key={index}>{item.description}</li>
            ))}
          </ul>
        ) : (
          <span> None</span>
        )}
      </div>
    <p><strong>Stake Business:</strong> {meeting.stakeBusiness ? 'Yes' : 'No'}</p>
    <p><strong>Sacrament Hymn:</strong> #{meeting.sacramentHymn.number} {meeting.sacramentHymn.title}</p>
    <ul>
          {meeting.speakers.map((speaker, index) => (
            <li key={index}>
              <strong>{speaker.name}</strong> 
              {speaker.topic ? ` - Topic: ${speaker.topic}` : ''} 
              {speaker.type === 'musical-number' ? ' (Musical Number)' : ''}
            </li>
          ))}
        </ul>
        
    <p><strong>Closing Hymn:</strong> #{meeting.closingHymn.number}  {meeting.closingHymn.title}</p>
    <p><strong>Closing Prayer:</strong> {meeting.closingPrayer}</p>
    </div>
    
);
}
