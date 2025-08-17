import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { QRCode } from "./components/QRCode";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <QRCode />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}