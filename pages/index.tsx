import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ heading, events }) {
  return (
    <>
      <Head>
        <title>Next Target</title>
        <meta name="description" content="My first NEXT.JS app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            Home
          </Link>
          <Link href="/events">
            Events
          </Link>
          <Link href="/about-us">
            About Us
          </Link>
        </nav>
      </header>

      <main className="flex min-h-screen flex-col items-center gap-20">
        {events.map((ev) => {
          return (<Link key={ev.id} href={`/events/${ev.id}`} className="flex max-w-5xl even:flex-row-reverse gap-8">
            <Image alt={ev.title} src={ev.image} width={400} height={400} className="h-80 rounded-md" />
            <div className='flex justify-center gap-4 flex-col'>
              <h2 className='text-3xl font-black'>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </Link>);
        })}
      </main>
      <footer>
        <div>
          &copy; {new Date().getFullYear()} all rights reserved
        </div>
        {heading}
      </footer>
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