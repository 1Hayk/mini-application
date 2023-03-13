import { Provider as ReduxProvider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES_CONFIG } from './configs/routes.config';
import { store } from './store/store';

export const App: React.FC = () => {
  const router = createBrowserRouter(ROUTES_CONFIG);
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  )
}