import '@/styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
      mirror: false,
      anchorPlacement: 'top-bottom'
    })
  })
  return <Component {...pageProps} />
}
