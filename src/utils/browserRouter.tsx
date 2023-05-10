import { createBrowserRouter } from 'react-router-dom';
import Vacancies from 'pages/Vacancies';
import NotFound from 'pages/NotFound';
import Favorites from 'pages/Favorites';
import Layout from 'layouts/Layout';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Vacancies /> },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default browserRouter;
