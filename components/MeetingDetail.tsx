import type {SacramentMeeting} from '../lib/types';

interface MeetingCardProps{
  meeting:SacramentMeeting;
}

export function MeetingDetail({meeting}:MeetingCardProps){
    return(
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '8px 0' }}>
    <h3>Meeting Date: {meeting.date}</h3>
    <p><strong>Type:</strong> {meeting.meetingType}</p>
    <p><strong>Presiding:</strong> {meeting.presiding}</p>
    <p><strong>Conducting:</strong> {meeting.conducting}</p>
    <p><strong>Announcements:</strong> {meeting.announcements}</p>
    
    <p><strong>Opening Hymn:</strong> #{meeting.openingHymn.number} - {meeting.openingHymn.title}</p>
    <p><strong>Opening Prayer:</strong> {meeting.openingPrayer}</p>
    <div>
        <strong>Ward Business:</strong>
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
    <p><strong>Sacrament Hymn:</strong> #{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</p>
    <ul>
          {meeting.speakers.map((speaker, index) => (
            <li key={index}>
              <strong>{speaker.name}</strong> 
              {speaker.topic ? ` - Topic: ${speaker.topic}` : ''} 
              {speaker.type === 'musical-number' ? ' (Musical Number)' : ''}
            </li>
          ))}
        </ul>
        
    <p><strong>Closing Hymn:</strong> #{meeting.closingHymn.number} - {meeting.closingHymn.title}</p>
    <p><strong>Closing Prayer:</strong> {meeting.closingPrayer}</p>
    </div>
    
);
}
