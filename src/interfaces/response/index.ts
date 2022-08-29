import { TErrors } from '../types';

interface IData {
  [key: string]: any;
}

export interface IResponse {
  success: boolean;
  messages: string;
  token?: string;
  data?: IData;
  errors?: TErrors;
}
