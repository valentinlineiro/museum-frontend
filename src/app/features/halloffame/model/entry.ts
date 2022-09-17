import { Artist } from '../../../shared/model/artist';

export interface Entry {
  id?: string;
  title: string;
  description: string;
  image?: string;
  authors: Artist[];
}
