import { BrowserRouter } from 'react-router-dom';
import './styles/config/index.scss'
import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import { StoreProvider } from '@app/providers/StoreProvider';
import { AppRouter } from '@app/providers/router';

export const App: React.FC = () => {
  return (
    <div className="app">
      <StoreProvider>
          <BrowserRouter>
            <div className="container">
              <Header />
              <AppRouter />
            </div>
            <Footer />
          </BrowserRouter>
      </StoreProvider>
    </div>
  );
};
