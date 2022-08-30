import { TStatus } from '../types';

export interface IMessages {
  [key: string]: any;
}

export interface IData {
  [key: string]: any;
}

export interface IHandler extends Error {
  success: boolean;
  messages: IMessages;
  status: TStatus;
  data?: IData;
  token?: string;
  errors?: string[];
}
