import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from '../context/FavoritesContext';
import { ZipCodesProvider } from '../context/ZipCodesContext';

import NavBar from '../components/Navigation/NavBar';
import About from './About';
import Search from './Search';
import DogCareTips from './DogCareTips';
import Match from './Match';

const MainLayout: React.FC = () => {
  return (
    <FavoritesProvider>
      <ZipCodesProvider>
        <header className="sticky top-0 z-10 bg-custom-blue">
          <NavBar />
        </header>
        <main className="flex flex-col bg-off-white font-lexend px-0 min-h-screen-minus-nav overflow-auto">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/match" element={<Match />} />
            <Route path="/tips" element={<DogCareTips />} />
          </Routes>
        </main>
      </ZipCodesProvider>
    </FavoritesProvider>
  );
};

export default MainLayout;
