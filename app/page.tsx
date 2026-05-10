import About from "./_components/about";
import Availability from "./_components/availability";
import Faq from "./_components/faq";
import Feature from "./_components/feature";
import Home from "./_components/home";
import Roadmap from "./_components/roadmap";
import Tokenomic from "./_components/tokenomic";

export default function RootPage() {
  return (
    <main className="bg-bg overflow-hidden">
      <Home />
      <Feature />
      <About />
      <Roadmap />
      <Availability />
      <Tokenomic />
      {/* <Team /> */}
      <Faq />
    </main>
  );
}
