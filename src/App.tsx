import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './features/pages/HomePage';
import { ContactPage } from './features/pages/ContactPage';
import { PortfolioPage } from './features/pages/PortfolioPage';
import { CareersPage } from './features/pages/CareersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
