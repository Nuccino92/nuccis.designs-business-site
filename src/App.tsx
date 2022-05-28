import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/services/Services";
import AboutMe from "./pages/aboutMe/AboutMe";
import Clients from "./pages/clients/Clients";
import Contact from "./pages/contact/Contact";
import PaymentsAndPolicy from "./pages/paymentsAndReturnPolicy/PaymentsAndPolicy";
import ProductDelivery from "./pages/productDelivery/ProductDelivery";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./pages/category/category.scss";

// service pages
import HomeDecor from "./pages/category/homeDecor/HomeDecor";
import Pets from "./pages/category/pets/Pets";
import Clothing from "./pages/category/clothing/Clothing";
import Invitations from "./pages/category/invitations/Invitations";
import Bridal from "./pages/category/bridal/Bridal";
import Childern from "./pages/category/children/Children";
import Signs from "./pages/category/signs/Signs";
import Festive from "./pages/category/festive/Festive";
import Teacher from "./pages/category/teacher/Teacher";
import Decals from "./pages/category/decals/Decals";

import ScrollToTop from "./utils/ScrollToTop";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/payments-policy" element={<PaymentsAndPolicy />} />
              <Route path="/productdelivery" element={<ProductDelivery />} />

              {/* service category routes */}
              <Route path="/services/homedecor" element={<HomeDecor />} />
              <Route path="/services/pets" element={<Pets />} />
              <Route path="/services/clothing" element={<Clothing />} />
              <Route path="/services/invitations" element={<Invitations />} />
              <Route path="/services/bridal" element={<Bridal />} />
              <Route path="/services/children" element={<Childern />} />
              <Route path="/services/signs" element={<Signs />} />
              <Route path="/services/festive" element={<Festive />} />
              <Route path="/services/teacher" element={<Teacher />} />
              <Route path="/services/decals" element={<Decals />} />
            </Routes>
          </ScrollToTop>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
