export interface Transaction {
  id:          number;
  description: string;
  amount:      number;
  date:        Date;
  categoryID:  number;
}
