import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HmvPage from './pages/HmvPage';
import LmvPage from './pages/LmvPage';
import ERickshawPage from './pages/ERickshawPage';
import LicensePage from './pages/LicensePage';
import ContactPage from './pages/ContactPage';
import LocationPage from './pages/LocationPage';
import FaqPage from './pages/FaqPage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/hmv-training" element={<HmvPage />} />
          <Route path="services/lmv-training" element={<LmvPage />} />
          <Route path="services/e-rickshaw-training" element={<ERickshawPage />} />
          <Route path="license-training" element={<LicensePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="location" element={<LocationPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
