import PageHeader from '@/components/Header/PageHeader'
import HeroSection from '@/components/Hero/HeroSection'
import InstagramFeed from '@/components/InstagramFeed/InstagramFeed'
import ContactForm from '@/components/ContactForm/ContactForm'
import PageFooter from '@/components/Footer/PageFooter'

export default function Home() {
  return (
    <>
      <PageHeader />
      <HeroSection />
      <InstagramFeed />
      <ContactForm />
      <PageFooter />
    </>
  )
}
