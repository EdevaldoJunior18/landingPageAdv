import AboutUs from './components/AboutUs/aboutUs';
import Area from './components/Area/area';
import Carousel from './components/Carousel/carousel';
import FirstNavbar from './components/FirstNavbar/firstNavbar';
import Footer from './components/Footer/footer';
import SecondNavbar from './components/SecondNavbar/secondNavbar';
import WhatsButton from './components/WhatsButton/whatsButton';



function Index() {
  const images = [
    'https://www.promad.adv.br/blog/wp-content/uploads/2021/11/6-praticas-mais-valorizadas-em-um-escritorio-de-advocacia.jpg',
    'https://www.promad.adv.br/blog/wp-content/uploads/2021/11/6-praticas-mais-valorizadas-em-um-escritorio-de-advocacia.jpg',
  ];

  return (
    <div>
      <FirstNavbar />
      <SecondNavbar />
      <Carousel images={images} />
      <Area />
      <AboutUs />
      <Footer />
      <WhatsButton />
    </div>
  );
}

export default Index;