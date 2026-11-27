import { neon } from '@neondatabase/serverless';
import type { SacramentMeeting } from './types';
import { revalidatePath } from 'next/cache';

const sql = neon(process.env.DATABASE_URL!);

const ITEMS_PER_PAGE = 5;

export async function getMeetings(
  query: string = '',
  currentPage: number = 1
): Promise<SacramentMeeting[]> {
  const searchTerm = `%${query}%`;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const rows = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS "date",
      meeting_type                AS "meetingType",
      presiding, conducting, announcements,
      opening_hymn                AS "openingHymn",
      opening_prayer              AS "openingPrayer",
      ward_business               AS "wardBusiness",
      stake_business              AS "stakeBusiness",
      sacrament_hymn              AS "sacramentHymn",
      speakers,
      closing_hymn                AS "closingHymn",
      closing_prayer              AS "closingPrayer"
    FROM meetings
    WHERE
      to_char(date, 'YYYY-MM-DD') ILIKE ${searchTerm}
      OR presiding     ILIKE ${searchTerm}
      OR conducting ILIKE ${searchTerm}
      OR meeting_type ILIKE ${searchTerm}
      OR speakers::text ILIKE ${searchTerm}
    ORDER BY date DESC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;
  return rows as unknown as SacramentMeeting[];
}

export async function getMeetingsTotalPages(
  query: string = ''
): Promise<number> {
  const searchTerm = `%${query}%`;
  const rows = await sql`
    SELECT COUNT(*) FROM meetings
    WHERE
      presiding     ILIKE ${searchTerm}
      OR conducting ILIKE ${searchTerm}
      OR meeting_type ILIKE ${searchTerm}
      OR speakers::text ILIKE ${searchTerm}
  `;
  return Math.ceil(Number(rows[0].count) / ITEMS_PER_PAGE);
}

export async function getMeetingById(
  id: number | string
): Promise<SacramentMeeting | null> {
  const rows = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS "date",
      meeting_type                AS "meetingType",
      presiding, conducting, announcements,
      opening_hymn                AS "openingHymn",
      opening_prayer              AS "openingPrayer",
      ward_business               AS "wardBusiness",
      stake_business              AS "stakeBusiness",
      sacrament_hymn              AS "sacramentHymn",
      speakers,
      closing_hymn                AS "closingHymn",
      closing_prayer              AS "closingPrayer"
    FROM meetings WHERE id = ${id}
  `;
  return (rows[0] as unknown as SacramentMeeting) ?? null;
}

export async function createMeeting(data: { date: string; meetingType: string; presiding: string; conducting: string; announcements: string[]; openingHymn: number; openingPrayer: string; wardBusiness: boolean; stakeBusiness: boolean; sacramentHymn: number; speakers: string[]; closingHymn: number; closingPrayer: string }) {
  const sql = neon(process.env.DATABASE_URL!);
  await sql`INSERT INTO meetings (
      date, meeting_type, presiding, conducting, announcements,
      opening_hymn, opening_prayer, ward_business, stake_business,
      sacrament_hymn, speakers, closing_hymn, closing_prayer
    ) VALUES (
      ${data.date}, ${data.meetingType}, ${data.presiding}, ${data.conducting}, ${data.announcements},
      ${data.openingHymn}, ${data.openingPrayer}, ${data.wardBusiness}, ${data.stakeBusiness},
      ${data.sacramentHymn}, ${data.speakers}, ${data.closingHymn}, ${data.closingPrayer}
    )`;
}

export async function updateMeeting(id: number | string, data: { date: string; meetingType: string; presiding: string; conducting: string; announcements: string[]; openingHymn: number; openingPrayer: string; wardBusiness: boolean; stakeBusiness: boolean; sacramentHymn: number; speakers: string[]; closingHymn: number; closingPrayer: string }) {
  const sql = neon(process.env.DATABASE_URL!);
  await sql`UPDATE meetings SET
      date = ${data.date},
      meeting_type = ${data.meetingType},
      presiding = ${data.presiding},
      conducting = ${data.conducting},
      announcements = ${data.announcements},
      opening_hymn = ${data.openingHymn},
      opening_prayer = ${data.openingPrayer},
      ward_business = ${data.wardBusiness},
      stake_business = ${data.stakeBusiness},
      sacrament_hymn = ${data.sacramentHymn},
      speakers = ${data.speakers},
      closing_hymn = ${data.closingHymn},
      closing_prayer = ${data.closingPrayer}
    WHERE id = ${id}`;
}


export async function deleteMeeting(id: string){
 const sql = neon(process.env.DATABASE_URL!);
  await sql`DELETE FROM meetings WHERE id = ${id}`;
}

