import Layout from '../components/Layout';
import { AppContextProvider } from '../context/state';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  )
}

export default MyApp
