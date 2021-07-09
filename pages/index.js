import matter from "gray-matter";
import HeaderComponent from "../components/HeaderComponent";
import { NextSeo } from "next-seo";
import Hero from "../components/Hero";
import AboutHero from "../components/AboutHero";
import Technologies from "../components/Technologies";
// import Footer from "../components/Footer";

export default function Home(props) {
  return (
    <div id="mainPage">
      <NextSeo title="Coder Ali" description="Home" />
      <HeaderComponent />
      <Hero />
      <hr />
      <AboutHero />
      <hr />
      <Technologies />
      <hr />
      {/* <Footer /> */}
    </div>
  );
}
