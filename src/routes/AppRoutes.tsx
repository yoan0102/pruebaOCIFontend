import { DashboardScreen, HomeScreen, LoginScreen } from '@/pages';
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
    ],
  },
]);

export default router;
