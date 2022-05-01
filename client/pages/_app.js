import '../styles/globals.css'
import { TransactionProvider } from '../context/TransactionsContext'

function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
        <Component {...pageProps} />
    </TransactionProvider>
  ) 
}

export default MyApp
