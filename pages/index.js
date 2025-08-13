import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
//import Services from '../components/Services';
import Services from '../components/Services2';
//import Credentials from '../components/Credentials';
//import Credentials from '../components/Credentials2';
//import Credentials from '../components/Credentials3';
import Credentials from '../components/Credentials4';
import CompanyInsight from '../components/CompanyInsight';
//import Contact from '../components/Contact';
import Contact from '../components/ContactOptions';
import Footer from '../components/Footer1';
//import Footer from '../components/Footer2';
//import Footer from '../components/Footer3';

export default function Home() {
  return (
    <>
      <Head>
        <title>Filard Musson System</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Credentials />
        <CompanyInsight />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
