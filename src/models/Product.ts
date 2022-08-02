export interface Product {
  _id: string;
  nameProduct: string;
  price: number;
  status: boolean;
  category: string;
  image: string;
}
export interface Pagination {
  total: number;
  page: number;
  limit: number;
}
export interface FilterProduct {
  nameProduct?: string;
  category?: string;
  status?: boolean;
  total?: number;
  page?: number;
  limit?: number;
}
