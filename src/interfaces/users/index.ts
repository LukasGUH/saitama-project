export interface IListType {
  [key: string]: any;
}

export interface IList {
  nextWatch: IListType;
  completed: IListType;
  inProgress: IListType;
  dropped: IListType;
  topTen: IListType;
}

export interface IUser {
  firstName?: string;
  lastName?: string;
  nickName?: string;
  email?: string;
  password?: string;
  favorites?: IListType;
  lists?: IList;
}
