import { Column } from '../models';

export const INVOICE_COLUMNS: Column[] = [
  {
    accessoryKey: 'id',
    label: 'ID',
  },
  {
    accessoryKey: 'product',
    label: 'Product',
  },
  {
    accessoryKey: 'quantity',
    label: 'Quantity',
  },
  {
    accessoryKey: 'price',
    label: 'Price',
  },
];
