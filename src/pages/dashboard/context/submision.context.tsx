import { submisionService } from '@/services';
import { AxiosResponse } from 'axios';
import { createContext, FC, useState, useContext } from 'react';
import { TypeSubmision } from '../Submision/interface/submmision';

export interface ISubmision {
  noEntry: number;
  type: TypeSubmision.NEW | TypeSubmision.TRASLADO;
  social_case: boolean;
  motive: string;
  children: string;
}

const initialValues: ISubmision = {
  noEntry: 0,
  type: TypeSubmision.NEW,
  social_case: false,
  motive: '',
  children: '',
};
type SubmisionContextType = {
  submisions: ISubmision[];
  createSubmision: (submision: { submision: ISubmision }) => void;
};

const SubmisionContext = createContext<SubmisionContextType | null>(null);

type SubmisionContextProps = {
  children: JSX.Element | JSX.Element[];
};

const SubmisionContextProvider: FC<SubmisionContextProps> = ({ children }) => {
  const [submisions, setSubmisions] = useState<ISubmision[]>([]);

  const createSubmision = async (submision: { submision: ISubmision }) => {
    const submisionsResp: AxiosResponse<ISubmision> = await submisionService.save(submision);
    console.log(submisionsResp);
    setSubmisions((state) => [...state, submisionsResp.data]);
  };

  return <SubmisionContext.Provider value={{ submisions, createSubmision }}>{children}</SubmisionContext.Provider>;
};

export default SubmisionContextProvider;

export const useSubmision = () => {
  const context = useContext(SubmisionContext);
  if (context === undefined) throw new Error('context hervido');
  return context;
};
