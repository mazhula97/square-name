import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import Header from './components/header';
import ErrorBoundary from './hoc/errorBoundary';
import AppRoutes from './routes/AppRoutes';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { GLOBAL_STYLES } from './App-styled';

const App = () => {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Global styles={GLOBAL_STYLES} />
        <ErrorBoundary>
          <Header />
          <main>
            <AppRoutes />
          </main>
        </ErrorBoundary>
      </QueryParamProvider>
    </BrowserRouter>
  );
};

export default App;
