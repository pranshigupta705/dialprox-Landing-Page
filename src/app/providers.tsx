import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { store } from '@/store';
import { router } from '@/app/router';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

export function AppProviders({ children }: { children?: React.ReactNode }) {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
      {children}
    </Provider>
  );
}
