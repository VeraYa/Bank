import { HomePage } from '@pages/HomePage/HomePage';
import { LoanPage } from '@pages/LoanPage/LoanPage';
import { NotFoundPage } from '@pages/NotFound/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
};
