import { TErrors } from '../types';

interface IData {
  [key: string]: any;
}

export interface IResponse {
  success: boolean;
  message: string;
  token?: string;
  data?: IData;
  errors?: TErrors;
}
