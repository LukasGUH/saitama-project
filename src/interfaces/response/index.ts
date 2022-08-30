import { TStatus } from '../types';

interface IData {
  [key: string]: any;
}

export interface IResponse {
  success: boolean;
  messages?: string;
  status?: TStatus;
  token?: string;
  data?: IData;
  errors?: string[];
}
