"use client";

import fs from 'fs';
import path from 'path';
import { createContext, useContext, useEffect, useState } from 'react';

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

// Deliberately meaningless values
const defaultData: DataType = {
    ticketLink: "https://lextalk.tech/",
    schedule: [],
    date: ""
};

const DataContext = createContext<DataType>(defaultData);

export function DataProvider({ children }: any) {
    const [data, setData] = useState<DataType>(defaultData);

    useEffect(() => {
        async function fetchData() {
            // Generate dynamically by looking at the json file in public/data/current
            const dataDir = path.join(process.cwd(), 'public/data/current');
            const files = fs.readdirSync(dataDir);
            const file = files[0];

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/current/${file}`);
            const result = await response.json();
            result.data = path.parse(file).name;
            setData(result);
        }
        fetchData();
    }, [])
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}