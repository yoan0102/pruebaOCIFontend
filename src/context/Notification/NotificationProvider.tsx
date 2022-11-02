import { FC, useState } from 'react';
import { NotificationContext } from './NotificationContext';
import { Notification } from '@/components';

export const NotificationProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [msg, setMsg] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<string | undefined>();

  const handleClose = (): void => {
    setOpen(false);
  };

  const getError = (msg: string): void => {
    setSeverity('error');
    setOpen(true);
    setMsg(msg);
  };

  const getSuccess = (msg: string): void => {
    setSeverity('success');
    setOpen(true);
    setMsg(msg);
  };

  return (
    <NotificationContext.Provider value={{ getError, getSuccess }}>
      <Notification handleClose={handleClose} open={open} severity={severity} msg={msg} />
      {children}
    </NotificationContext.Provider>
  );
};
