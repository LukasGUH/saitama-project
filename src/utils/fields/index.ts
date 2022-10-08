import { IQuery } from '../../interfaces';

export const animeFields = `id,description,titles,canonicalTitle,averageRating,startDate,endDate,popularityRank,ratingRank,ageRating,ageRatingGuide,subtype,status,posterImage,coverImage,episodeCount,episodeLength,totalLength,youtubeVideoId,showType`;
export const characterFields = `id,names,canonicalName,description,image`;
export const genreFields = `id,name,description`;
export const categorieFields = `id,title,description`;

export const createQuery = (query: IQuery): string => {
  const result = `/anime?${
    query.subtype ? `filter[subtype]=${query.subtype}&` : ''
  }${query.categories ? `filter[categories]=${query.categories}&` : ''}${
    query.name ? `filter[text]=${query.name}&` : ''
  }${query.sort ? `sort=${query.sort}&` : ''}${`fields[anime]=${animeFields}`}${
    query.perPage ? `&query[limit]=${query.perPage}` : ''
  }${query.currentPage ? `&query[offset]=${query.currentPage}` : ''}`;

  return result;
};
