import "./App.css";
import Cta from "./components/cta/Cta";
import EmailSection from "./components/emailSection/EmailSection";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Review from "./components/review/Review";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Review />
      <Cta />
      <EmailSection />
      <Footer />
    </>
  );
}

export default App;
