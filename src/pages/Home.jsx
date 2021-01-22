const { default: Header } = require('../components/HomePageComponents/Header');
const { default: Section_A  } = require('../components/HomePageComponents/Section_A');
const { default: Section_B} = require('../components/HomePageComponents/Section_B');
const {default: Section_C} = require('../components/HomePageComponents/Section_C');
const Home = ({ location }) => {
  return (
    <>
      <Header />
      <Section_A />
      <Section_B />
      <Section_C query={location.search} />
    </>
  );
};

export default Home;
