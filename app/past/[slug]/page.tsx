import fs from 'fs';
import path from 'path';

import { Talk } from "@/components/shared/Talk";

type ScheduleData = {
    schedule: { 
        time: string;
        title: string; 
        presenter: string; 
        link: string;
    }[];
};

export async function generateStaticParams(){
    // Generate dynamically by looking at all the json files in data
    const dataDir = path.join(process.cwd(), 'public/data/past');
    const files = fs.readdirSync(dataDir);

    const slugs = files
        .filter(file=> file.endsWith('.json'))
        .map(file => ({
            slug: file.replace('.json', '')
        }))

    return slugs;
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps ) {
    const resolvedParams = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/past/${resolvedParams.slug}`, { next: { revalidate: false }})
    const data: ScheduleData = await response.json();

    const date = resolvedParams.slug;

    // Set UTC to fix any errors with current timezone
    const formattedDate = new Date(date + 'T00:00:00Z').toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
      });

    return (
        <div>
            <div className="text-center my-10 bg-accent w-fit mx-auto p-5 ring ring-primary rounded-lg drop-shadow-2xl">
                <h1 className="text-5xl font-bold font-montserrat text-center">
                Talks
                </h1>
                <span className="text-xl">
                    This LexTalk was on {formattedDate}
                </span>
            </div>
        
            {data.schedule.map((talk: any, index: any) => (
                <Talk key={index} talk={talk} />
            ))}
        </div>
    )

}