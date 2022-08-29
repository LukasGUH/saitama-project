import { TStatus } from '../types';

export interface IMessagesError {
  [key: string]: any;
}

export interface IError extends Error {
  success: boolean;
  messages: IMessagesError;
  status: TStatus;
  errors?: string[];
}
