import CallToAction from '../components/Home/CallToAction';
import CommunityTestimonials from '../components/Home/CommunityTestimonials';
import Header from '../components/Home/Header';
import Main from '../components/Home/Main';

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <CommunityTestimonials/>
      <CallToAction/>
    </div>
  );
};

export default Home;