import { Invoice } from '../models';

export const invoiceData: Invoice = {
  id: 1,
  name: 'Computer Components',
  total: 0,
  client: {
    name: 'John Doe',
    lastName: 'Smith',
    address: {
      country: 'United States',
      city: 'New York',
      street: '5th Avenue',
      number: 15,
    },
  },
  company: {
    name: 'Tech Store',
    fiscalNumber: 123456789,
  },
  items: [
    {
      id: 1,
      product: 'Motherboard',
      quantity: 1,
      price: 250,
    },
    {
      id: 2,
      product: 'CPU',
      quantity: 1,
      price: 350,
    },
    {
      id: 3,
      product: 'RAM Memory',
      quantity: 2,
      price: 100,
    },
  ],
};
