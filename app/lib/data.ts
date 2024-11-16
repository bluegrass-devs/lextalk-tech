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

export async function getData(): Promise<DataType> {
    return new Promise((resolve) => {
        const dataDir = path.join(process.cwd(), 'public/data/current');
        const files = readdirSync(dataDir);
        const jsonFile = files.filter(file => file.endsWith('.json'))[0];
        
        const rawData = readFileSync(path.join(dataDir, jsonFile), 'utf8');
        resolve(JSON.parse(rawData));
    });
}