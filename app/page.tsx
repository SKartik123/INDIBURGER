import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import BestsellerSection from '@/components/BestsellerSection'
import MenuSection from '@/components/MenuSection'
import AddressSection from '@/components/AddressSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-burger-dark">
      <Navbar />
      <HeroSection />
      <BestsellerSection />
      <MenuSection />
      <AddressSection />
      <Footer />
    </main>
  )
}
