import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Column } from '../../models';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { EmptyDataComponent } from '../empty-data/empty-data.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatIconModule, EmptyDataComponent],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() columns!: Column[];
  @Input() data!: any[];
  @Input() total!: number;

  @Output() removeEmitter: EventEmitter<number> = new EventEmitter<number>();
  onRemove(id: number) {
    this.removeEmitter.emit(id);
  }
}
