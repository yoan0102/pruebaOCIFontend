import { instance } from './base';
import { ISubmision } from '../pages/dashboard/context/submision.context';
const endpoint = 'submision';

export const submisionService = {
  getAll: ({ page = 1 }: { page?: number }) => {
    return instance.get(endpoint, {
      params: {
        page,
      },
    });
  },
  getOne: ({ id }: { id: number }) => {
    return instance.get(`${endpoint}/${id}`);
  },

  save: (submision: { submision: ISubmision }) => {
    return instance.post(`${endpoint}`, {
      ...submision,
    });
  },
};
