import '../styles/globals.css'
import { useRouter } from 'next/router'
import * as gtag from '../gtag'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

/* MyApp.getInitialProps = async ({ Component, ctx}) => {
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx): {}
  };
} */


export default MyApp
