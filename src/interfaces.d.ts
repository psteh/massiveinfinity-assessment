export interface IRecord {
  id: number;
  upc: number;
  brand: string;
  productName: string;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
}
