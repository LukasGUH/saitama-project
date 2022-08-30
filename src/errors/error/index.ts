import { IHandler, IMessages } from '../../interfaces';
import { TStatus } from '../../interfaces/types';

class HTTPError extends Error implements IHandler {
  public success: boolean;
  public status: TStatus;
  public messages: IMessages = {
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '404': 'Not Found',
    '500': 'Internal Server Error',
    '503': 'Service Unavailable',
  };
  public errors?: string[];

  constructor(success: boolean, status: TStatus, errors?: string[]) {
    super();
    this.success = success;
    this.status = status;
    this.messages = this.messages[status];
    this.errors = errors;
  }
}

export default HTTPError;
