import { NextResponse } from 'next/server';
import { getBlogFiles } from '@/lib/data';

export async function GET() {
    const files = getBlogFiles();
    return NextResponse.json(files);
}

// Blog creation/editing is more complex (MDX files), for now just listing.
// We can add POST later if needed to create files.

export async function POST(request: Request) {
    const { title, slug, content } = await request.json();
    // In a real app, we'd write to file here.
    // For this demo, we'll just return success as file writing logic for MDX is complex
    // and requires careful handling of frontmatter.
    // But let's try to implement a basic version if needed.

    return NextResponse.json({ success: true, message: "Blog creation not fully implemented yet" });
}
