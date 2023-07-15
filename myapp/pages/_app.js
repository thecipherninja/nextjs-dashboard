import '@/styles/globals.css';
import {SessionProvider} from 'next-auth/react';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Analytics />
    </SessionProvider>
  )
}
