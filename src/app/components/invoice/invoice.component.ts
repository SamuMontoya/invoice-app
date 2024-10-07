import { Component, EventEmitter, OnInit } from '@angular/core';
import { InvoiceService } from '../../services';
import { Column, Invoice, Item } from '../../models';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { TableComponent } from '../table/table.component';
import { INVOICE_COLUMNS } from '../../data';
import { ModalComponent } from '../modal/modal.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    TableComponent,
    ModalComponent,
    FormComponent,
  ],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;
  columns: Column[] = INVOICE_COLUMNS;
  isDeleteModalVisible: boolean = false;
  isFormVisible: boolean = false;
  idToDelete: number = 0;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  onDelete(id: number): void {
    this.invoice = this.service.removeItem(id);
    this.isDeleteModalVisible = false;
  }

  onRemove(id: number): void {
    this.idToDelete = id;
    this.isDeleteModalVisible = true;
  }

  onOpenForm(): void {
    this.isFormVisible = true;
  }

  onCloseDelete(): void {
    this.isDeleteModalVisible = false;
  }

  onCloseForm(): void {
    this.isFormVisible = false;
  }

  onCreate(item: Item): void {
    this.invoice = this.service.createItem(item);
    this.isFormVisible = false;
  }
}
