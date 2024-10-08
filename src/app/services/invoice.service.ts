import { Injectable } from '@angular/core';
import { Invoice, Item } from '../models';
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

  createItem(item: Item): Invoice {
    this.invoice.items.push(item);
    return { ...this.invoice, total: this.getTotal() };
  }

  removeItem(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter((item) => item.id !== id);
    return { ...this.invoice, total: this.getTotal() };
  }

  getTotal(): number {
    return this.invoice.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
  }
}
