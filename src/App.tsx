import { Suspense } from 'react';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import ErrorBoundary from './hoc/errorBoundary';
import AppRoutes from './routes/AppRoutes';

import { GLOBAL_STYLES } from './App-styled';
import Loader from './components/common/loader';

const App = () => {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Global styles={GLOBAL_STYLES} />
        <ErrorBoundary>
          <Header />
          <Suspense fallback={<Loader />}>
            <main>
              <AppRoutes />
            </main>
          </Suspense>
        </ErrorBoundary>
      </QueryParamProvider>
    </BrowserRouter>
  );
};

export default App;
