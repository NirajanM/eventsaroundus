import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function SingleEvent({ data }) {
    const email = useRef("");
    const route = useRouter();
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        const userEmail = email.current.value;
        const currentRoute = route.query.singleEvent;
        console.log(userEmail, currentRoute)
    }
    return (
        <div className="flex justify-center">
            <div className="px-8 mb-40 text-left max-w-5xl flex flex-col items-center justify-center text-center">
                <Image alt={data.title} src={data.image} width={600} height={400} />
                <h2 className="text-xl md:text-3xl font-bold pt-12 pb-4">{data.title}</h2>
                <h3>{data.description}</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                }}
                    className="flex flex-col items-center"
                >
                    <label className="mt-4">Register for this event:</label>
                    <input ref={email} placeholder="Your email address" className="px-2 py-1 text-center my-2" /><button
                        type="submit"
                        className="py-2 px-4 bg-blue-500/40 rounded-xl mt-4 hover:bg-blue-500/80"
                    >submit</button>
                </form>
            </div>
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