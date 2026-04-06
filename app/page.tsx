import PageHeader from '@/components/Header/PageHeader'
import HeroSection from '@/components/Hero/HeroSection'
import ContactForm from '@/components/ContactForm/ContactForm'
import InstagramFeed from '@/components/InstagramFeed/InstagramFeed'
import PageFooter from '@/components/Footer/PageFooter'

export default function Home() {
  return (
    <>
      <PageHeader />
      <HeroSection />
      <ContactForm />
      <InstagramFeed />
      <PageFooter />
    </>
  )
}
