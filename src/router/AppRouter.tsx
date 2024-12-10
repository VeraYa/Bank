import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../app/pages/NotFound/NotFound';
import { CreditCard } from '../app/pages/CreditCard/CreditCard';
import { HomePage } from '../app/pages/HomePage/HomePage';

export const AppRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card" element={<CreditCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};
