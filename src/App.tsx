import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import './styles/config/index.scss'
import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';

export const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="container">
          <Header />
          <AppRouter />
        </div>
        <Footer />
      </BrowserRouter>
    </div>

  );
};
