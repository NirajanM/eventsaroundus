import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function EventsPage({ events }) {
    return (
        <div>
            <h1>Events Page</h1>
            {events.map((ev) => {
                return (<Link key={ev.id} href={`/events/${ev.id}`}>
                    <Image alt={ev.title} src={ev.image} width={400} height={400} />
                    <h2>{ev.title}</h2>
                </Link>);
            })}
        </div>
    )
}

export async function getStaticProps() {
    const { events_categories } = await import("/data/data.json");
    return (
        {
            props: {
                heading: "Hey, this text came from a function through props!",
                events: events_categories,
            },
        }
    );
}