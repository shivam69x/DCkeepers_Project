import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollTop.jsx";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SecNav from "./components/SecNav";
import SignUp from "./pages/SignUp";
import SharedHostingpage from "./Products/SharedHostingpage";
import ResellerHostingPage from "./ResellerHosting/ResellerHosting";
import PythonHostingPage from "./PythonHosting/PythonHosting";
import DedicatedServerindia from "./pages/DedicatedServerindia.jsx";
import DedicatedServerforeign from "./pages/DedicatedServerforeign.jsx";
import Vpsindia from "./pages/Vpsindia.jsx";
import Vpsforeign from "./pages/Vpsforeign.jsx";
import Cloudindia from "./pages/Cloudindia.jsx";
import Cloudforeign from "./pages/Cloudforeign.jsx";
import ForexHosting from "./ForexHosting/ForexHosting";
import BulkMail from "./BulkMail/BulkMail";
import M365 from "./Microsoft/M365";
import LicenseHome from "./License/LicenseHome";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import GoogleHome from "./GoogleW/GoogleHome";
import ProxyHome from "./ProxyServer/ProxyHome";
import BillForm from "./pages/BillForm.jsx";
import Invoice from "./BillComponents/InvoicePage.jsx";
import Success from "./pages/Success.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <SecNav />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shared-hosting" element={<SharedHostingpage />} />
          <Route path="/reseller-hosting" element={<ResellerHostingPage />} />
          <Route path="/python-hosting" element={<PythonHostingPage />} />
          <Route path="/success" element={<Success />} />
          <Route
            path="/dedicatedserver/india"
            element={<DedicatedServerindia />}
          />
          <Route
            path="/dedicatedserver/foreign"
            element={<DedicatedServerforeign />}
          />
          <Route path="/vps/india" element={<Vpsindia />} />
          <Route path="/vps/foreign" element={<Vpsforeign />} />
          <Route path="/cloud/india" element={<Cloudindia />} />
          <Route path="/cloud/foreign" element={<Cloudforeign />} />
          <Route path="/forex-servers" element={<ForexHosting />} />
          <Route path="/proxy-servers" element={<ProxyHome />} />
          <Route path="bulk-email" element={<BulkMail />} />
          <Route path="/google-workspace" element={<GoogleHome />} />
          <Route path="/microsoft-365" element={<M365 />} />
          <Route path="/license" element={<LicenseHome />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/Contact-us" element={<ContactUs />} />

          <Route path="/billing" element={<BillForm />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
