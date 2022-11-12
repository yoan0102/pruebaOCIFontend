import { RouterProvider } from 'react-router-dom';
import { NotificationProvider } from './context/Notification';
import router from './routes/AppRoutes';
const App = () => {
  return (
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  );
};

export default App;
