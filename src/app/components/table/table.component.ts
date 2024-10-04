import { Component, Input } from '@angular/core';
import { Column } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() columns!: Column[];
  @Input() data!: any[];
}
