import { readdirSync, readFileSync } from 'fs';
import path from 'path';

export type ScheduleItem = {
    time: string;
    title: string;
    presenter?: string;
    info?: string;
    resources?: string;
    tags?: string[];
};

export type DataType = {
    ticketLink?: string;
    schedule: ScheduleItem[];
};

const EVENTS_DIR = path.join(process.cwd(), 'data/events');

export function getAllEventFilenames(): string[] {
    return readdirSync(EVENTS_DIR)
        .filter((file) => file.endsWith('.json'))
        .map((file) => file.replace(/\.json$/i, ''))
        .sort();
}

export function getPastEventFilenames(): string[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return getAllEventFilenames().filter((slug) => {
        const date = getDateFromFilename(slug + '.json');
        return date !== null && date < today;
    });
}

export function getEventData(slug: string): DataType {
    const filePath = path.join(EVENTS_DIR, `${slug}.json`);
    const rawData = readFileSync(filePath, 'utf8');
    return JSON.parse(rawData);
}

export function getCurrentEvent(): (DataType & { filename: string }) | null {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const allSlugs = getAllEventFilenames();
    const upcoming = allSlugs.find((slug) => {
        const date = getDateFromFilename(slug + '.json');
        return date !== null && date >= today;
    });

    if (!upcoming) {
        return null;
    }

    const data = getEventData(upcoming);
    return { ...data, filename: upcoming + '.json' };
}

export function getDateFromFilename(filename: string): Date | null {
    const base = filename.replace(/\.json$/i, "");
    const [Y, M, D] = base.split("-").map((n) => Number(n));

    if (!Y || !M || !D) return null;
    return new Date(Date.UTC(Y, M - 1, D));
}
