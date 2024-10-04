import {
  Who,
  Branches,
  Hero,
  ContactComponent,
  Values,
} from "../../components/index";

const Home = () => {
  return (
    // START HOME PAGE
    <section id="home">
      <div className="">
        <Hero />
        <Who />
        <Values />
        <Branches />
        <ContactComponent />
      </div>
    </section>
    // END HOME PAGE
  );
};

export default Home;
