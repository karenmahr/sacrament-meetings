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
   return (
    <div className="mx-auto my-4 max-w-3xl rounded-2xl border border-slate-300 bg-white p-6 text-slate-700 shadow-xl sm:p-8 space-y-6">
  
      <div className="border-b border-slate-200 pb-4">
        <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-950">
          {meeting.meetingType}
        </span>
        <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950 sm:text-3xl">
          {formattedDate}
        </h3>
      </div>

      <div className="flex flex-col space-y-4 rounded-xl border border-slate-200 bg-slate-100 p-5 text-sm sm:text-base">
        <div>
          <strong className="block font-semibold text-blue-950">Presiding:</strong>
          <span>{meeting.presiding}</span>
        </div>

        <div>
          <strong className="block font-semibold text-blue-950">Conducting:</strong>
          <span>{meeting.conducting}</span>
        </div>

        <div>
          <strong className="block font-semibold text-blue-950">Announcements:</strong>
          <span>
            {Array.isArray(meeting.announcements)
              ? meeting.announcements.join(', ')
              : meeting.announcements}
          </span>
        </div>

        <div>
          <strong className="block font-semibold text-blue-950">Opening Hymn:</strong>
          <span>#{meeting.openingHymn.number} {meeting.openingHymn.title}</span>
        </div>

        <div>
          <strong className="block font-semibold text-blue-950">Opening Prayer:</strong>
          <span>{meeting.openingPrayer}</span>
        </div>
      </div>

      <div className="flex flex-col space-y-4 rounded-xl border border-slate-200 bg-slate-100 p-5 text-sm sm:text-base">
        <div>
          <strong className="block font-semibold text-blue-950">Ward Business:</strong>
          {meeting.wardBusiness.length > 0 ? (
            <ul className="mt-1 list-disc space-y-1 pl-6 text-slate-600">
              {meeting.wardBusiness.map((item, index) => (
                <li key={index}>{item.description}</li>
              ))}
            </ul>
          ) : (
            <span className="text-slate-500">None</span>
          )}
        </div>

        <div>
          <strong className="block font-semibold text-blue-950">Stake Business:</strong>
          <span>{meeting.stakeBusiness ? 'Yes' : 'No'}</span>
        </div>

        <div>
          <strong className="block font-semibold text-blue-950">Sacrament Hymn:</strong>
          <span>
            {meeting.sacramentHymn
              ? `#${meeting.sacramentHymn.number} ${meeting.sacramentHymn.title}`
              : 'No sacrament meeting'}
          </span>
        </div>

        <div>
          <strong className="block font-semibold text-blue-950">Speakers & Musical Numbers:</strong>
          <ul className="mt-2 list-disc space-y-1.5 pl-6 text-slate-700">
            {meeting.speakers.map((speaker, index) => (
              <li key={index}> 
                <strong className="font-medium text-blue-950">{speaker.name}</strong>
                {speaker.topic ? <span className="text-slate-600"> - Topic: {speaker.topic}</span> : ''} 
                {speaker.type === 'musical-number' ? (
                  <span className="ml-2 rounded bg-white px-2 py-0.5 text-xs font-medium text-blue-950 border border-slate-200">
                    Musical Number
                  </span>
                ) : (
                  ''
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col space-y-4 rounded-xl border border-slate-200 bg-slate-100 p-5 text-sm sm:text-base">
        <div>
          <strong className="block font-semibold text-blue-950">Closing Hymn:</strong>
          <span>#{meeting.closingHymn.number} {meeting.closingHymn.title}</span>
        </div>

        <div>
          <strong className="block font-semibold text-blue-950">Closing Prayer:</strong>
          <span>{meeting.closingPrayer}</span>
        </div>
    
  </div>
  </div>
  );
}
