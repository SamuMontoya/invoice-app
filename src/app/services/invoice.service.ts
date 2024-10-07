import { Injectable } from '@angular/core';
import { Invoice } from '../models';
import { invoiceData } from '../data';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;

  constructor() {}

  getInvoice(): Invoice {
    return {
      ...this.invoice,
      total: this.getTotal(),
    };
  }

  getTotal(): number {
    return this.invoice.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
  }
}
