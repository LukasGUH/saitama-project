import { IError } from '../interfaces';

class HTTPError extends Error implements IError {
  public success: boolean;
  public messages: string;
  public status: number;
  public errors?: string[];

  constructor(
    success: boolean,
    messages: string,
    status: number,
    errors?: string[],
  ) {
    const message = [messages];
    super(...message);
    this.success = success;
    this.messages = messages;
    this.status = status;
    this.errors = errors;
  }
}

export default HTTPError;
