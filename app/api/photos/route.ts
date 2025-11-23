import { NextResponse } from 'next/server';
import { getPhotos, savePhotos, Photo } from '@/lib/data';
import { v4 as uuidv4 } from 'uuid';

import { cookies } from 'next/headers';

export async function GET() {
    const photos = getPhotos();
    const cookieStore = cookies();
    const isAdmin = cookieStore.get('admin_session');

    if (isAdmin) {
        return NextResponse.json(photos);
    }

    // Filter for public view (default visible if undefined)
    const visiblePhotos = photos.filter(p => p.visible !== false);
    return NextResponse.json(visiblePhotos);
}

export async function POST(request: Request) {
    const photo: Photo = await request.json();
    const photos = getPhotos();

    const newPhoto = { ...photo, id: uuidv4() };
    photos.unshift(newPhoto);
    savePhotos(photos);

    return NextResponse.json(newPhoto);
}

export async function PUT(request: Request) {
    const updatedPhoto: Photo = await request.json();
    const photos = getPhotos();

    const index = photos.findIndex(p => p.id === updatedPhoto.id);
    if (index !== -1) {
        photos[index] = updatedPhoto;
        savePhotos(photos);
        return NextResponse.json(updatedPhoto);
    }

    return NextResponse.json({ error: 'Photo not found' }, { status: 404 });
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

    let photos = getPhotos();
    photos = photos.filter(p => p.id !== id);
    savePhotos(photos);

    return NextResponse.json({ success: true });
}
