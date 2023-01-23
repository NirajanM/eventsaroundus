import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
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
        <a href="/events/london">
          <img /><h2>Events in London</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequatur optio consectetur eaque, repellendus reprehenderit incidunt ad pariatur nisi cumque dolorem aliquam veniam tempore modi laudantium alias totam error impedit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, error voluptatum illum omnis eius esse ut pariatur quaerat sit, laudantium quibusdam aliquid? Dolorem culpa exercitationem necessitatibus inventore. Facilis, reiciendis nesciunt!
          </p>
        </a>
        <a href="/events/sanfrancisco">
          <img /><h2>Events in Sanfrancisco</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos vitae aperiam dicta neque perspiciatis beatae accusantium maiores ut, sunt debitis impedit, ea esse eos non adipisci reprehenderit vel dolor modi?Fugiat sit inventore aspernatur. Sed modi voluptatum possimus provident molestiae, eveniet nam explicabo temporibus quidem id laboriosam cupiditate ad velit recusandae itaque repellat nisi esse ducimus aperiam? Obcaecati, laboriosam minima? Autem nihil architecto exercitationem vero veritatis laboriosam explicabo repellat sapiente sit officia quam in nostrum, magnam voluptas eos, accusantium molestiae blanditiis? Ducimus optio voluptatibus impedit laboriosam, voluptates ut illum nisi!
          </p>
        </a>
        <a href="/events/Barcelona">
          <img /><h2>Events in Barcelona</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum eveniet accusantium excepturi pariatur, eligendi accusamus magnam. Iure, itaque? Reprehenderit excepturi nihil distinctio ullam sequi quod tempore temporibus amet quibusdam?Vel ipsum nostrum asperiores laboriosam blanditiis dolorum consequatur magnam recusandae officia tempore dolor odio beatae quisquam quibusdam, quidem saepe ea sapiente. Porro praesentium veniam ratione, sint saepe quod neque nostrum.Aut neque et, voluptatem ea ut cumque pariatur! Libero maxime nam tempora dolorem quam soluta facilis, voluptate a quae esse iusto eligendi earum quas iure recusandae fugiat eius id laudantium.
          </p>
        </a>
      </main>
      <footer>
        <div>
          &copy; {new Date().getFullYear()} all rights reserved
        </div>
      </footer>
    </>
  )
}
