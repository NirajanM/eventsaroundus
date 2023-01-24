import '@/styles/globals.css'
import PageLayout from "../src/components/layout/PageLayout"
export default function App({ Component, pageProps }) {
  return (
    <>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  )
}
