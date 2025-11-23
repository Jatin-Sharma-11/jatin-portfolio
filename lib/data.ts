import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');
const PHOTOS_FILE = path.join(DATA_DIR, 'photos.json');
const BLOG_DIR = path.join(process.cwd(), 'content/posts');

export interface Project {
    id?: string;
    title: string;
    tech: string[];
    period: string;
    description: string;
    link: string;
    category: string;
    visible?: boolean;
}

export interface Photo {
    id: string;
    src: string;
    title: string;
    description?: string;
    location?: string;
    camera?: string;
    date?: string;
    visible?: boolean;
}

// Projects
export function getProjects(): Project[] {
    if (!fs.existsSync(PROJECTS_FILE)) return [];
    try {
        const data = fs.readFileSync(PROJECTS_FILE, 'utf-8');
        if (!data) return [];
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading projects.json:", error);
        return [];
    }
}

export function saveProjects(projects: Project[]) {
    try {
        fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 4));
    } catch (error) {
        console.error("Error saving projects.json:", error);
    }
}

// Photos
export function getPhotos(): Photo[] {
    if (!fs.existsSync(PHOTOS_FILE)) return [];
    try {
        const data = fs.readFileSync(PHOTOS_FILE, 'utf-8');
        if (!data) return [];
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading photos.json:", error);
        return [];
    }
}

export function savePhotos(photos: Photo[]) {
    fs.writeFileSync(PHOTOS_FILE, JSON.stringify(photos, null, 4));
}

// Blogs (Basic file listing for now)
export function getBlogFiles() {
    if (!fs.existsSync(BLOG_DIR)) return [];
    return fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'));
}
