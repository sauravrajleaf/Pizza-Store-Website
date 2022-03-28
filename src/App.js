import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import { HomePage } from "./components/pages/HomePage";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <HomePage />
      <Footer />
    </>
  );
}

export default App;
