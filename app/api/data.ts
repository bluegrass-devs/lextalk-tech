// pages/api/data.ts
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

type ScheduleItem = {
    time: string;
    title: string;
    presenter?: string;
    info?: string;
    resources?: string;
};

type DataType = {
    ticketLink: string;
    schedule: ScheduleItem[];
    date?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<DataType>) {
    try {
        const dataDir = path.join(process.cwd(), 'public/data/current');
        const files = fs.readdirSync(dataDir);
        const file = files[0];
        const filePath = path.join(dataDir, file);
        
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const jsonData: DataType = JSON.parse(fileData);
        
        // Optionally add the file name as a `date` or identifier
        jsonData.date = path.parse(file).name;

        res.status(200).json(jsonData);
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).json({
            ticketLink: "https://lextalk.tech/",
            schedule: [],
            date: ""
        });
    }
}