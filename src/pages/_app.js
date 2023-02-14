import '@/styles/globals.scss'
import Layout from '@/components/layout'
import { Love_Ya_Like_A_Sister, Work_Sans } from '@next/font/google';

const love_ya_like_a_sister = Love_Ya_Like_A_Sister({
  subsets: ['latin'],
  weight: ['400'],
  display: 'optional'
});

const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'optional',
});


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <style jsx global>
            {`
              .title {
                font-family: ${love_ya_like_a_sister.style.fontFamily};
              }

              html {
                font-family: ${work_sans.style.fontFamily};
              }
            `}
      </style>
      <Component {...pageProps} />
    </Layout>
  )
}
