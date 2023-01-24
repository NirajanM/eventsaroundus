import Image from "next/image";
import Link from "next/link";
export default function EventsCatPage({ data, cityName }) {
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <h2 className="text-3xl font-black border-b-2 border-slate-500 mb-12">Events in {cityName}: </h2>
            <div className="flex min-h-screen flex-col items-center gap-20">
                {
                    data.map(d => {
                        return (
                            <Link key={d.id} href={`/events/${d.city}/${d.id}`} className="flex md:flex-row flex-col max-w-5xl w-full even:flex-col even:md:flex-row-reverse gap-8">
                                <Image alt={d.title} src={d.image} width={300} height={400}
                                    className="rounded-md" />
                                <div className='flex justify-center gap-4 flex-col'>
                                    <h2 className='text-3xl font-black'>{d.title}</h2>
                                    <p>{d.description}</p></div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export async function getStaticPaths() {//this will tell next.js how many dynamic pages it needs to generate during build
    const { events_categories } = await import("/data/data.json");
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                cat: ev.id.toString(),
            },
        }
    })
    return {
        paths: allPaths, //all paths contains params
        fallback: false, //setting it false will not allow random param that user type after /events/ to get generated and only generate the paths provided above
    }
}

export async function getStaticProps(context) {
    const { allEvents } = await import("data/data.json");
    const id = context?.params.cat;
    const data = allEvents.filter(ev => {
        return (ev.city === id)
    }) // this will return match of current params that user browse (subroute) with city value from allEvents array in data.json
    console.log(data)
    return (
        {
            props: { data, cityName: id }
        }
    )
}
