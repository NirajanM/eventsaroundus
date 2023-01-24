import Image from "next/image";

export default function SingleEvent({ data }) {
    return (
        <div className="p-2 mb-40 text-left max-w-5xl flex flex-col items-left justify-center">
            <Image alt={data.title} src={data.image} width={600} height={400} />
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <p>{data.description}</p>
        </div>

    )
}

export async function getStaticPaths() {
    const { allEvents } = await import("/data/data.json");
    const allPaths = allEvents.map(ev => {
        return (
            {
                params: {
                    cat: ev.city,
                    singleEvent: ev.id,
                }
            })
    }
    )
    return (
        {
            paths: allPaths,
            fallback: false,
        }
    );
}

export async function getStaticProps(context) {
    const id = context?.params.singleEvent;
    const { allEvents } = await import("/data/data.json");
    const data = allEvents.find(ev => ev.id === id)
    return (
        {
            props: { data }
        }
    )

}