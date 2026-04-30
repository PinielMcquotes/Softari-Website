import HeroSection from '@/components/HeroSection'
import TheNumbers from '@/components/TheNumbers'
import HowItWorks from '@/components/HowItWorks'
import Solutions from '@/components/Solutions'
import WhySoftari from '@/components/WhySoftari'
import ChidiStory from '@/components/ChidiStory'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TheNumbers />
      <ChidiStory />
      <HowItWorks />
      <Solutions />
      <WhySoftari />
      <CTASection />
    </>
  )
}