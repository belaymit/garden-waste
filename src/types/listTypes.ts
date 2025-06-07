import { ga_w01, ga_w03 } from "../assets";

export type T_List = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  image?: string; 
};

export type SkipCategoryPaginationProps = {
  skips: T_List[];
  title: string;
  itemsPerPage?: number;
}

export type SkipCategoryProps = {
  skips: T_List[];
  title: string;
}

export type SkipCardProps ={
  skip: T_List;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export const skipImages = [ga_w01, ga_w03];

