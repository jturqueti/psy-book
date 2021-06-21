import '../styles/globals.css'
import Layout from '../components/layout'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Layout>
    <Component {...pageProps} />
  
    </Layout>
  <Footer/>
  </div>
  )
}

export default MyApp
