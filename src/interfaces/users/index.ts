export interface IUser {
  firstName?: string;
  lastName?: string;
  nickName?: string;
  email?: string;
  password?: string;
}

export interface IUserPayload {
  nickName: string;
  email: string;
}
