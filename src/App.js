
import './App.css';
// import Accordion from './components/Accordian/Accordian';
import YourPage from './components/Accordian/YourPage.jsx';
import Header from './components/Header/Header'
import ImageCarousel from './components/carousel/Carousel';
import ImageCarousel2 from './components/Carousal2/Carousel2.jsx'
import Footer from './components/Footer/Footer.jsx';
import Product from './components/product/Product.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <YourPage />
      <ImageCarousel />
      <YourPage />
      <Product />
      <ImageCarousel2 />
      <Footer />
    </div>
  );
}

export default App;
