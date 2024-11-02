import {
  About,
  Service,
  Report,
  WhyUS,
  Branches,
  Hero,
} from "../../components/index";

const Home = () => {
  return (
    // START HOME PAGE
    <section id="home">
      <Hero />
      <About />
      <WhyUS />
      <Service />
      <Report />
      <Branches />
    </section>
    // END HOME PAGE
  );
};

export default Home;
