import { getMeetingById } from '@/lib/meetings-db';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
    ) {
    const { id } = await params;
    
    const numericId = Number(id);
    if (isNaN(numericId)) {
        return Response.json({ message: 'ID parameter is not a valid number' }, { status: 400 });
    }

    const meeting = await getMeetingById(numericId);
    if (!meeting) {
        return Response.json({ message: 'No meeting with the given ID exists' }, { status: 404 });
    }

    return Response.json(meeting);
    }