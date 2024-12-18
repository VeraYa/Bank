import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import './styles/config/index.scss'
import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import { Provider } from 'react-redux';
import store from '@store/store';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <Header />
            <AppRouter />
          </div>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
};
