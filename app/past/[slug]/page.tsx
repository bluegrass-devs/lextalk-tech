import { Talk } from "@/components/shared/Talk";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams(){
    return [
        { slug: "2023-05-18" },
        { slug: "2023-10-12" },
        { slug: "2023-01-25" }
    ];
}

async function Page({ params }: Props) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/${params.slug}.json`)
    const data = await response.json();

    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
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

export default Page;