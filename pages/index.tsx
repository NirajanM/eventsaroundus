import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ events }) {
  return (
    <>
      <Head>
        <title>Next Target</title>
        <meta name="description" content="My first NEXT.JS app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center gap-20 p-4">
        {events.map((ev) => {
          return (<Link key={ev.id} href={`/events/${ev.id}`} className="flex md:flex-row flex-col max-w-5xl w-full even:flex-col even:md:flex-row-reverse gap-8">
            <Image alt={ev.title} src={ev.image} width={300} height={100} className="rounded-md" />
            <div className='flex justify-center gap-4 flex-col'>
              <h2 className='text-3xl font-black'>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </Link>);
        })}
      </main>
    </>
  )
}

//this function only runs on serverside so we can even have secret keys in this function below
// + this function runs before client side components
export async function getServerSideProps() {
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