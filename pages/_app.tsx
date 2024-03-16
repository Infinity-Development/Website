import { AppProps } from 'next/app'
import '../styles/globals.css'
import Header from '../components/Static/Header'
import Footer from '../components/Static/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
