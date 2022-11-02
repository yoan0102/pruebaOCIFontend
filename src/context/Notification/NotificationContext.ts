import { createContext, useContext, useState } from 'react';

type ContextProps = {
  getError: (msg: string) => void;
  getSuccess: (msg: string) => void;
};

export const NotificationContext = createContext<ContextProps | null>(null);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('No existe C\ntexto');
  return context;
};
