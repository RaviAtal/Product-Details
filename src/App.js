import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import BuyCards from "./Components/BuyCards";
import Related from "./Components/Related";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footere from "./Components/Footere";
import UseStateDesc from "./Components/UseStateDesc";
import BackToTop from "./Components/BackToTop";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <BuyCards />
      <UseStateDesc />
      <Related />
      <Footere />
      <BackToTop />
    </>
  );
}

export default App;
