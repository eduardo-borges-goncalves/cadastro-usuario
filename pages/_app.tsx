import type { AppProps } from 'next/app'
import { Layout } from '../components/layout'
import { UsersProvider } from '../contexts/users'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <UsersProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UsersProvider>
    </>
  )
}

export default MyApp
