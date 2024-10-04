import { Injectable } from '@angular/core';
import { Invoice } from '../models';
import { invoiceData } from '../data';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private invoice: Invoice = invoiceData;

  constructor() {}

  getInvoice(): Invoice {
    return this.invoice;
  }
}
