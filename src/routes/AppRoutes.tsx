import { DashboardScreen, HomeScreen, LoginScreen, Submision } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import DashboardIndex from '@/pages/dashboard/DashBoardIndex/DashBoardIndex';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: 'auth/login',
    element: <LoginScreen />,
  },
  {
    path: 'dashboard',
    element: <DashboardScreen />,
    children: [
      {
        index: true,
        element: <DashboardIndex />,
      },
      {
        path: 'submision',
        element: <Submision />,
      },
    ],
  },
]);

export default router;
