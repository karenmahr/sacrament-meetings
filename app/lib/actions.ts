'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import {
  createMeeting as dbCreateMeeting,
  updateMeeting as dbUpdateMeeting,
  deleteMeeting as dbDeleteMeeting,
} from './meetings-db';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { auth } from '@/auth';

async function requireAuth() {
  const session = await auth();
  if (!session?.user) {
    throw new Error('Unauthorized: You must be signed in.');
  }
  return session.user;
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid email or password.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error; // re-throw so Next.js handles redirects correctly
  }
}

const MeetingFormSchema = z.object({
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      meetingType: z.enum(['sacrament', 'ward', 'stake']),
      presiding: z.string().max(100),
      conducting: z.string().max(100),
      announcements: z.array(z.string().max(200)),
      openingHymn: z.int(),
      openingPrayer: z.string(),
      wardBusiness: z.boolean(),
      stakeBusiness: z.boolean(),
      sacramentHymn: z.int(),
      speakers: z.array(z.string().max(100)),
      closingHymn: z.int(),
      closingPrayer: z.string()
});

function parseMeetingFormData(formData: FormData) {
  const raw={
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    announcements: formData.get('announcements'),
    openingHymn: formData.get('openingHymn'),
    openingPrayer: formData.get('openingPrayer'),
    wardBusiness: formData.get('wardBusiness'),
    stakeBusiness: formData.get('stakeBusiness'),
    sacramentHymn: formData.get('sacramentHymn'),
    speakers: formData.get('speakers'),
    closingHymn: formData.get('closingHymn'),
    closingPrayer: formData.get('closingPrayer')
  };
  return MeetingFormSchema.safeParse(raw);
}

export async function createMeeting(prevState: State, formData: FormData): Promise<State>{
  await requireAuth();
  const parsed = parseMeetingFormData(formData); // o la validación de tus datos

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: 'Invalid meeting input.',
    };
  }

  try {
    await dbCreateMeeting(parsed.data);
  } catch (error) {
    console.error('Error creating meeting:', error);
    throw new Error('Failed to create meeting.');
  }
  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function updateMeeting(
  id: number | string,
  prevState: State,
  formData: FormData
): Promise<State> {
  await requireAuth();
  const parsed = parseMeetingFormData(formData);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: 'Invalid meeting input.',
    };
  }

  try {
    await dbUpdateMeeting(id, parsed.data);
  } catch (error) {
    console.error('Error updating meeting:', error);
    throw new Error('Failed to update meeting.');
  }
  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function deleteMeeting(id: string) {
  await requireAuth();
  try {
    await dbDeleteMeeting(id);
  } catch (error) {
    console.error('Error deleting meeting:', error);
    throw new Error('Failed to delete meeting.');
  }
  revalidatePath('/meetings');
}

export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    announcements?: string[];
    openingHymn?: string[];
    openingPrayer?: string[];
    wardBusiness?: string[];
    stakeBusiness?: string[];
    sacramentHymn?: string[];
    speakers?: string[];
    closingHymn?: string[];
    closingPrayer?: string[];
  };
  message?: string | null;
};