export interface FilteredItem {
  _type?: string;
  _id?: string;
  slug?: {
    current?: string;
  };
  order: number
}
