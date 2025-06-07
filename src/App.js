import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PromoSection from './components/PromoSection';
import PriceTableSection from './components/PriceTable';
import SubmitScrapSection from './components/SubmitScrapSection';
import PhotoEstimateSection from './components/PhotoEstimateSection';
import Footer from './components/Footer';
import ColoredScrapPage from "./pages/ColoredScrapPage";
import MedPage from "./pages/MedPage";
import AluminumPage from "./pages/AluminumPage";
import BlackMetall from './pages/BlackMetall';
import IronPages from './pages/IronPages';
import VanaPage from './pages/VanaPage'
import CarsMetallPage from './pages/CarsMetallPage';
import PricePage from './pages/PricePage';
import VivozPage from './pages/VivozPage';
import ContactsPage from './pages/Contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className='w-full'>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <PromoSection />
                  <PriceTableSection />
                  <SubmitScrapSection />
                  <PhotoEstimateSection />
                </>
              }
            />
            <Route path="/cvetnoy-lom" element={<ColoredScrapPage />} />
            <Route path="/cvetnoy-lom/med" element={<MedPage />} />
            <Route path="/cvetnoy-lom/alyuminiy" element={<AluminumPage />} />
            <Route path='/chernyy-lom' element={<BlackMetall />} />
            <Route path="/chernyy-lom/zhelezo" element={<IronPages />} />
            <Route path="/bytovoy-lom" element={<VanaPage />} />
            <Route path='/avtolom' element={<CarsMetallPage />}/>
            <Route path='/ceny' element={<PricePage />} />
            <Route path='/vyvoz-metalloloma' element={<VivozPage />}/>
            <Route path='/kontakty' element={<ContactsPage />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;