import '@/sass/style.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'MSenicic - Portfolio',
  description: 'My Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='page'>
          <Header/>
          <div className='content'>
            <PageHeader/>
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
