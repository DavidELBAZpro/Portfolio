import { Header } from './cmps/header'
import { Navbar } from './cmps/navbar'
import { Experiences } from './cmps/experiences'
import { Services } from './cmps/services'
import { Portfolio } from './cmps/portfolio'
import { Testimonials } from './cmps/testimonials'
import { Contact } from './cmps/contact'
import { Footer } from './cmps/footer'
import { About } from './cmps/about'
import { SnackbarProvider } from 'notistack'

export function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <Header />
        <Navbar />
        <About />
        <Experiences />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </SnackbarProvider>
    </div>
  )
}
