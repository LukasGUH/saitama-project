export interface IError extends Error {
  success: boolean;
  messages: string;
  status: number;
  errors?: string[];
}
