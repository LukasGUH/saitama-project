import { TErrors } from '../types';

export interface IValidation {
  success: boolean;
  message?: string;
  errors?: TErrors;
}
