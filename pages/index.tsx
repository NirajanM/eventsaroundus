import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
export default function Home({ heading, events }) {
  console.log(events.events_categories);
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
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>

      <main className={styles.main}>
        {events.events_categories.map((ev) => {
          return (<a key={ev.id} href={`/events/${ev.id}`}>
            <Image alt={ev.title} src={ev.image} width={400} height={400} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>);
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
  const { events_categories } = await import("../data/data.json");
  return (
    {
      props: {
        heading: "Hey, this text came from a function through props!",
        events: { events_categories },
      },
    }
  );


}