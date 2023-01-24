import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function EventsPage({ events }) {
    return (
        <div className='flex justify-center items-center min-w-screen flex-col p-4'>
            <h1 className='text-3xl font-black my-8 text-slate-400'>Check out, currently happening events:</h1>
            <div className='flex gap-4 flex-col md:flex-row'>
                {events.map((ev) => {
                    return (<Link key={ev.id} href={`/events/${ev.id}`} className="relative">
                        <Image alt={ev.title} src={ev.image} width={400} height={400} className=" h-80 rounded-md" />
                        <h2 className='absolute bottom-4 text-5xl font-black text-slate-100/90 shadow-xl px-4'>{ev.title}</h2>
                    </Link>);
                })}
            </div>
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