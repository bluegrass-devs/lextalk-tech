"use client"
import {createContext, useContext} from 'react';
import {DataType} from '@/lib/data';

// Deliberately meaningless values
const defaultData: DataType = {
    ticketLink: "https://lextalk.tech/",
    schedule: [],
    date: ""
};

const DataContext = createContext<DataType>(defaultData);

export function DataProvider({ 
    data = defaultData, 
    children 
}: { 
    data?: DataType; 
    children: React.ReactNode
}) {
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}