import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={raleway.className}>
        <Header />
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
