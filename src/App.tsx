import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SmoothScroller } from './components/layout/SmoothScroller';
import { HomePage } from './features/pages/HomePage';
import { ContactPage } from './features/pages/ContactPage';
import { PortfolioPage } from './features/pages/PortfolioPage';
import { CareersPage } from './features/pages/CareersPage';
import { RealisationsPage } from './features/pages/RealisationsPage';
import { ServicesPage } from './features/pages/ServicesPage';

function App() {
  return (
    <SmoothScroller>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/realisations" element={<RealisationsPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </BrowserRouter>
    </SmoothScroller>
  );
}

export default App;
