import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services';
import { Column, Invoice } from '../../models';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { TableComponent } from '../table/table.component';
import { INVOICE_COLUMNS } from '../../data';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent, TableComponent],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;
  columns: Column[] = INVOICE_COLUMNS;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
}
