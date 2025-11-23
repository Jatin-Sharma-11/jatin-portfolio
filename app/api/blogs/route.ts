import { NextResponse } from 'next/server';
import { getBlogFiles } from '@/lib/data';

export async function GET() {
    const files = getBlogFiles();
    return NextResponse.json(files);
}

// Blog creation/editing is more complex (MDX files), for now just listing.
// We can add POST later if needed to create files.

export async function POST() {
    // Currently, blog creation is not implemented.
    // This endpoint returns a placeholder response.
    return NextResponse.json({ success: true, message: "Blog creation not fully implemented yet" });
}
