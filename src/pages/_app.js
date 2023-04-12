import '@/styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-in-out',
      delay: 200,
      mirror: false,
      anchorPlacement: 'top-bottom'
    })
  })
  return <Component {...pageProps} />
}
