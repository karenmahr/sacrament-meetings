import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2,
    date: '2026-11-08',
    meetingType: 'general',
    presiding: 'Area Seventy Roberts',
    conducting: 'Bishop Anderson',
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Sister Rivera',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
    speakers: [
      { name: 'Area Seventy Roberts', topic: 'Discipleship in daily life', type: 'speaker' },
      { name: 'Ward Choir', topic: 'I Know That My Redeemer Lives', type: 'musical-number' }
    ],
    closingHymn: { number: 136, title: 'I Know That My Redeemer Lives' },
    closingPrayer: 'Brother King',
    announcements: ['Combined meeting for all local wards.']
  },
  {
    id: 3,
    date: '2026-11-15',
    meetingType: 'regular',
    presiding: 'Bishop Anderson',
    conducting: 'Brother Miller',
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Sister Garcia',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
    speakers: [
      { name: 'Brother Perez', topic: 'Gratitude', type: 'speaker' },
      { name: 'Sister Lopez', topic: 'Service', type: 'speaker' }
    ],
    closingHymn: { number: 152, title: 'God Be with You Till We Meet Again' },
    closingPrayer: 'Brother Taylor',
    announcements: ['Choir practice after sacrament meeting.']
  },
  {
    id: 4,
    date: '2026-11-22',
    meetingType: 'regular',
    presiding: 'President Thompson',
    conducting: 'Bishop Anderson',
    openingHymn: { number: 92, title: 'For the Beauty of the Earth' },
    openingPrayer: 'Brother Wilson',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 185, title: 'Reverently and Meekly Now' },
    speakers: [
      { name: 'Sister Evans', topic: 'The Power of Daily Prayer', type: 'speaker' },
      { name: 'Brother Harris', topic: 'Keeping Our Covenants', type: 'speaker' },
      { name: 'Sister Reed & Brother Scott', topic: 'Come, Thou Fount of Every Blessing', type: 'musical-number' }
    ],
    closingHymn: { number: 249, title: 'Called to Serve' },
    closingPrayer: 'Sister Baker',
    announcements: [
      'Stake leadership training next Sunday at 4:00 PM.',
      'Sign up for the annual ward Thanksgiving dinner in the foyer.'
    ]
  },
  {
    id: 5,
    date: '2026-11-29',
    meetingType: 'regular',
    presiding: 'Bishop Anderson',
    conducting: 'Brother Morales',
    openingHymn: { number: 6, title: 'Redeemer of Israel' },
    openingPrayer: 'Sister Turner',
    wardBusiness: [
      { description: 'Sustaining of Brother Sanchez as Young Men advisor' }
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [
      { name: 'Brother Gomez', topic: 'Preparing for the Second Coming', type: 'speaker' },
      { name: 'Sister White', topic: 'Finding Joy in Temple Work', type: 'speaker' },
      { name: 'Ward Choir', topic: 'Be Still, My Soul', type: 'musical-number' }
    ],
    closingHymn: { number: 219, title: 'Because I Have Been Given Much' },
    closingPrayer: 'Brother Scott',
    announcements: [
      'Ward Christmas party planning committee meets Wednesday at 7:00 PM.',
      'Fast and Testimony meeting next Sunday.'
    ]
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}