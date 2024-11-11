'use client';

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
            const response = await fetch('/api/data');
            const result = await response.json();
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