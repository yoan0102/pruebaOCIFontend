import { useRouteError } from 'react-router-dom';

export interface NotFoundInterface {}

const NotFound: React.FC<NotFoundInterface> = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>NotFound</h1>
      <p>Page not Found</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default NotFound;
