import '@/styles/globals.scss'
import { Love_Ya_Like_A_Sister, Work_Sans } from '@next/font/google';
import { SessionProvider, useSession } from "next-auth/react"
import Layout from '@/components/layout'
import Spinner from 'react-bootstrap/Spinner'
import { useRouter } from 'next/router'

const love_ya_like_a_sister = Love_Ya_Like_A_Sister({
  subsets: ['latin'],
  weight: ['400'],
  display: 'optional'
});

const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'optional',
})


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
  const { data: session, status  } = useSession({ required: true })
  const router = useRouter()

  if (status === "loading") {
    return 
    <>
      <Spinner animation="border" role="status" variant="primary" size="lg">
          <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </>
  }
  if (session === null) {
    return router.push('/api/auth/signin')
  }

  return children
}