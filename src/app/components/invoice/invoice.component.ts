import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services';
import { Column, Invoice } from '../../models';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { TableComponent } from '../table/table.component';
import { INVOICE_COLUMNS } from '../../data';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    TableComponent,
    ModalComponent,
  ],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;
  columns: Column[] = INVOICE_COLUMNS;
  isModalVisible: boolean = false;
  idToDelete: number = 0;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  onDelete(id: number): void {
    this.invoice.items = this.invoice.items.filter((item) => item.id !== id);
    this.isModalVisible = false;
  }

  onRemove(id: number): void {
    this.idToDelete = id;
    this.isModalVisible = true;
  }

  onClose(): void {
    this.isModalVisible = false;
  }
}
