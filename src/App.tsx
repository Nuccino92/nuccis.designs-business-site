import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/services/Services";
import AboutMe from "./pages/aboutMe/AboutMe";
import Clients from "./pages/clients/Clients";
import Contact from "./pages/contact/Contact";
import PaymentsAndReturnPolicy from "./pages/paymentsAndReturnPolicy/PaymentsAndReturnPolicy";
import ProductDeliveryAndReturns from "./pages/productDelivery/ProductDelivery";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="clients" element={<Clients />} />
            <Route
              path="payments-refunds"
              element={<PaymentsAndReturnPolicy />}
            />
            <Route
              path="productdelivery"
              element={<ProductDeliveryAndReturns />}
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
