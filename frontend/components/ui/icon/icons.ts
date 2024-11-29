import { faBook, faBuilding, faLeaf } from '@fortawesome/free-solid-svg-icons';

export const icons = {
  building: faBuilding,
  book: faBook,
  leaf: faLeaf,
};

export type Icons = keyof typeof icons;
