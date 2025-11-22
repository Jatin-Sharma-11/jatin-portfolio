import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
