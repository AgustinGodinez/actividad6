import '@/styles/globals.scss'
import { Love_Ya_Like_A_Sister, Work_Sans } from '@next/font/google';
import { SessionProvider, useSession } from "next-auth/react"
import Layout from '@/components/layout';

const love_ya_like_a_sister = Love_Ya_Like_A_Sister({
  subsets: ['latin'],
  weight: ['400'],
  display: 'optional'
});

const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'optional',
});


export default function App({ Component, pageProps: {session, ...pageProps} }) {
  console.log(`Validando ruta ${Component.auth}`)
 return (
    <SessionProvider  session={session}>
      {Component.auth ? (
        <Auth>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Auth>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </SessionProvider>
 )
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { data: session, status  } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}