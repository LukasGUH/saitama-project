export interface IImages {
  tiny?: string;
  large?: string;
  small?: string;
  medium?: string;
  original?: string;
}

export interface ITitles {
  en?: string;
  en_us?: string;
  en_jp?: string;
  ja_jp?: string;
}

export interface INames {
  en?: string;
  ja_jp?: string;
}

export interface IAttributes {
  description?: string;
  titles?: ITitles;
  canonicalTitle?: string;
  averageRating?: string;
  startDate?: string;
  endDate?: string;
  popularityRank?: string;
  ratingRank?: string;
  ageRating?: string;
  ageRatingGuide?: string;
  subtype?: string;
  status?: string;
  posterImage?: IImages;
  coverImage?: IImages;
  episodeCount?: string;
  episodeLength?: string;
  totalLength?: string;
  youtubeVideoId?: string;
  showType?: string;
}

export interface IGenreAttributes {
  name?: string;
  description?: string;
}

export interface IGenres {
  id: string;
  type: string;
  attributes: IGenreAttributes;
}

export interface ICategorieAttributes {
  title?: string;
  description?: string;
}

export interface ICategories {
  id: string;
  type: string;
  attributes: ICategorieAttributes;
}

export interface ICharacterAttributes {
  names?: INames;
  canonicalName?: string;
  description?: string;
  image?: IImages;
}

export interface ICharacters {
  id: string;
  type: string;
  attributes: ICharacterAttributes;
}

export interface IMediaCharacters {
  id: string;
}

export interface IAnimeRelated {
  id?: string;
  type?: string;
  attributes?: IAttributes;
}

export interface IAnime {
  id: string;
  type: string;
  attributes: IAttributes;
  genres?: IGenres[];
  categories?: ICategories[];
  characters?: ICharacters[];
  related?: IAnimeRelated[];
}

export interface IQuery {
  id?: string;
  key?: string;
  sort?: string;
  name?: string;
  perPage?: number;
  subtype?: string;
  related?: string;
  animeId?: string;
  listExit?: string;
  listNext?: string;
  categories?: string;
  currentPage?: number;
  listId?: string;
  listCurrentEp?: string;
}
