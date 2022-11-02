import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from './context/Notification';
import Router from './Router';

const App = () => {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </NotificationProvider>
  );
};

export default App;
