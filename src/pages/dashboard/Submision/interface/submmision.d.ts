type ISubmision = {
  noEntry: number;
  type: TypeSubmision.NEW | TypeSubmision.TRASLADO;
  fecha: Date;
  social_case: boolean;
  motive: string;
};

export enum TypeSubmision {
  NEW = 'nueva',
  TRASLADO = 'traslado',
}
