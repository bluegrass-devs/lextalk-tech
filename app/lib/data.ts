"use server"
import { readdir } from 'fs/promises';
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
    const dataDir = path.join(process.cwd(), 'public/data/current');

    try {
        const files = await readdir(dataDir);
        const jsonFile = files.filter(file=> file.endsWith('.json'))[0]
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/current/${jsonFile}`,
            { next: { revalidate: false } }
        )
        if(!response.ok) {
            throw new Error(`Error with JSON Fetch: ${response.status}`)
        }
        
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error reading JSON for current:", error);
        throw new Error("Failed to fetch current JSON")
    }
}