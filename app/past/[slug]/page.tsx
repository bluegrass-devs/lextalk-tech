import fs from 'fs';
import path from 'path';
import { Talk } from "@/components/shared/Talk";
export const dynamic = 'force-static';

export async function generateStaticParams() {
    const dataDir = path.join(process.cwd(), 'public/data/past');
    const files = fs.readdirSync(dataDir);

    return files
        .filter(file => file.endsWith('.json'))
        .map(file => ({
            slug: file.replace('.json', '')
        }));
}

function getData(slug: any) {
    const dataPath = path.join(process.cwd(), 'public/data/past', `${slug}.json`);
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(fileContents);
}

export default async function Page({ params }: any) {
    const data = getData(params.slug);

    const formattedDate = new Date(`${params.slug}T00:00:00Z`).toLocaleDateString("en-US", {
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
    );
}
