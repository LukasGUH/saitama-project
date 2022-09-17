interface IData {
  [key: string]: any;
}

export interface IValidation {
  success: boolean;
  data?: IData;
  errors?: string[];
}
