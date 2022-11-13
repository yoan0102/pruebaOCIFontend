import { IChildren } from './children';
type ISubmision = {
  noEntry: number;
  type: TypeSubmision.NEW | TypeSubmision.TRASLADO;
  social_case: boolean;
  motive: string;
  children: IChildren;
};

export enum TypeSubmision {
  NEW = 'nueva',
  TRASLADO = 'traslado',
}
