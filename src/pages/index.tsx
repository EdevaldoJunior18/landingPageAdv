import AboutUs from './components/AboutUs/aboutUs';
import Form from './components/Form/form';
import Navbar from './components/Navbar/navbar';
import News from './components/News/news';
import Projects from './components/Projects/projects';
import Services from './components/Services/services';
import Team from './components/Team/team';
import WhatsButton from './components/WhatsButton/whatsButton';

function Index() {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Services />
      <Projects />
      <Team />
      <News />
      <Form />
      <WhatsButton />
    </div>
  );
}

export default Index;