import Cta from "./components/cta/Cta";
import EmailSection from "./components/emailSection/EmailSection";
import Carousels from "./components/features/Carousels";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ReviewSwiper from "./components/review/ReviewSwiper";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <ReviewSwiper />
      <EmailSection />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
