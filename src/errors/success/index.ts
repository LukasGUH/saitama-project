import { IHandler, IMessages, IResponse, IData } from '../../interfaces';
import { TStatus } from '../../interfaces/types';

class HTTPHandler extends Error implements IHandler {
  public success: boolean;
  public status: TStatus;
  public messages: IMessages = {
    '200': 'Ok',
    '201': 'Created',
    '202': 'Accepted',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '404': 'Not Found',
    '500': 'Internal Server Error',
    '503': 'Service Unavailable',
  };
  public data?: IData;
  public token?: string;
  public errors?: string[];

  constructor(response: IResponse) {
    super();
    this.success = response.success;
    this.status = response.status;
    this.messages = this.messages[response.status];
    this.data = response.data;
    this.token = response.token;
    this.errors = response.errors;
  }
}

export default HTTPHandler;
