import { createBrowserRouter } from 'react-router-dom';
import Vacancies from 'pages/Vacancies';
import NotFound from 'pages/NotFound';
import Favorites from 'pages/Favorites';
import VacancyDetails from 'pages/VacancyDetails';
import Layout from 'layouts/Layout';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Vacancies /> },
      {
        path: '/:jobId',
        element: <VacancyDetails />,
      },
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
