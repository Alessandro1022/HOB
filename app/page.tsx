import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Handshake from '@/components/Handshake';
import Vision from '@/components/Vision';
import Huset from '@/components/Huset';
import Verksamheter from '@/components/Verksamheter';
import Framtid from '@/components/Framtid';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <Hero />
      <Handshake />
      <Vision />
      <Huset />
      <Verksamheter />
      <Framtid />
      <Footer />
    </SmoothScroll>
  );
}
