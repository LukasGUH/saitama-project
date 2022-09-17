import { Schema } from 'mongoose';

export interface IListDefault {
  id: string;
  currentEpisode?: string;
}

export interface IList {
  userId: Schema.Types.ObjectId;
  nextWatch?: IListDefault[];
  completed?: IListDefault[];
  inProgress?: IListDefault[];
  dropped?: IListDefault[];
  freeze?: IListDefault[];
  topTen?: IListDefault[];
  favorites?: IListDefault[];
}
