import '@/styles/globals.scss'
import { SessionProvider, useSession } from "next-auth/react"
import Spinner from 'react-bootstrap/Spinner'
import { useRouter } from 'next/router'


export default function App({
  Component, 
  pageProps: {session, ...pageProps} 
}) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
        getLayout(<Component {...pageProps} />)
        </Auth>
      ) : (
        getLayout(<Component {...pageProps} />)
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
  return children
}