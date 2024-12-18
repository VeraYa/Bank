import { CreditCard } from '@pages/CreditCard/CreditCard';
import { HomePage } from '@pages/HomePage/HomePage';
import { NotFound } from '@pages/NotFound/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card" element={<CreditCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};
