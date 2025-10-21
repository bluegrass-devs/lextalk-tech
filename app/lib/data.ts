import { readdirSync, readFileSync } from 'fs';
import path from 'path';

export type ScheduleItem = {
    time: string;
    title: string;
    presenter?: string;
    info?: string;
    resources?: string;
};

export type DataType = {
    ticketLink: string;
    schedule: ScheduleItem[];
    date?: string;
};

export function getData() {
    const dataDir = path.join(process.cwd(), 'public/data/current');
    const files = readdirSync(dataDir);
    const jsonFile = files.filter(file => file.endsWith('.json'))[0];

    if (!jsonFile) {
        throw new Error("No JSON file found in current data dir");
    }

    const rawData = readFileSync(path.join(dataDir, jsonFile), 'utf8');
    const parsed = JSON.parse(rawData);

    return {
        ...parsed,
        filename: jsonFile
    };
}

export function getDateFromFilename(filename: string): Date | null {
    const base = filename.replace(/\.json$/i, "");
    const [Y, M, D] = base.split("-").map((n) => Number(n));

    if (!Y || !M || !D) return null;
    return new Date(Date.UTC(Y, M - 1, D));
}

export function getFilenames(directory: string): string[] {
	const dataDir = path.join(process.cwd(), directory);
	const files = readdirSync(dataDir)
	    .filter((file) => file.endsWith(".json"))
	    .map((file) => file.replace(/\.json$/i, ""));

	return files;
}
