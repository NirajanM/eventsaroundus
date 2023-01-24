import Image from "next/image";
import Link from "next/link";
export default function EventsCatPage({ data, cityName }) {
    return (
        <div>
            <h2>Events in {cityName}: </h2>
            {
                data.map(d => {
                    return (
                        <Link key={d.id} href={`/events/${d.city}/${d.id}`}>
                            <Image alt={d.title} src={d.image} width={400} height={400} />
                            <h2>{d.title}</h2>
                            <p>{d.description}</p>
                        </Link>
                    )
                })
            }
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
