import { Talk } from "@/components/shared/Talk";
import { getPastEventFilenames, getEventData } from "@/lib/data";
export const dynamic = 'force-static';

export async function generateStaticParams() {
    return getPastEventFilenames().map((slug) => ({ slug }));
}

export default async function Page({ params }: any) {
    const { slug } = await params;
    const data = getEventData(slug);

    const formattedDate = new Date(`${slug}T00:00:00Z`).toLocaleDateString("en-US", {
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
