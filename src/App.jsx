import "./App.css";
import About from "./components/About/About";
import BuySection from "./components/BuySection/BuySection";
import DogVid from "./components/DogVid/DogVid";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Questions from "./components/Questions/Questions";
import Roadmap from "./components/Roadmap/Roadmap";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <DogVid />
      <Roadmap />
      <Questions />
      <BuySection />
      <Footer />
    </>
  );
}

export default App;
