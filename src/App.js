import { Navbar } from "./components/layout/navbar/Navbar";
import { Featured } from "./components/layout/featured/Featured";
import { Footer } from "./components/layout/footer/Footer";
import { HomePage } from "./components/pages/HomePage";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* <Featured /> */}
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
