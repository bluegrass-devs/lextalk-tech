type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams(){
    return [
        { slug: "first-talk" },
        { slug: "second-talk" },
        { slug: "third-talk" },
        { slug: "fourth-talk" }
    ];
}

async function page({ params }: Props) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/talks/talk1.json`)
    const data = await response.json();
    return (
        <div>
            {data.conferenceTalks.map((talk: any) => (
                <div key={talk.title}>
                <h2 class="text-3xl">{talk.title}</h2>
                    <p>Speaker: {talk.speaker}</p>
                    <p>Date: {talk.date}</p>
                    <p>Start Time: {talk.startTime}</p>
                    <p>{talk.description}</p>
                </div>
            ))}
        </div>
    )
}

export default page;