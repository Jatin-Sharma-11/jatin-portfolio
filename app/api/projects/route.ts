import { NextResponse } from 'next/server';
import { getProjects, saveProjects, Project } from '@/lib/data';
import { v4 as uuidv4 } from 'uuid';

import { cookies } from 'next/headers';

export async function GET() {
    const projects = getProjects();
    const cookieStore = cookies();
    const isAdmin = cookieStore.get('admin_session');

    if (isAdmin) {
        return NextResponse.json(projects);
    }

    // Filter for public view (default visible if undefined)
    const visibleProjects = projects.filter(p => p.visible !== false);
    return NextResponse.json(visibleProjects);
}

export async function POST(request: Request) {
    const project: Project = await request.json();
    const projects = getProjects();

    const newProject = { ...project, id: uuidv4() };
    projects.unshift(newProject); // Add to top
    saveProjects(projects);

    return NextResponse.json(newProject);
}

export async function PUT(request: Request) {
    const updatedProject: Project = await request.json();
    const projects = getProjects();

    const index = projects.findIndex(p => p.id === updatedProject.id);
    if (index !== -1) {
        projects[index] = updatedProject;
        saveProjects(projects);
        return NextResponse.json(updatedProject);
    }

    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

    let projects = getProjects();
    projects = projects.filter(p => p.id !== id);
    saveProjects(projects);

    return NextResponse.json({ success: true });
}
