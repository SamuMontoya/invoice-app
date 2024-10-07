import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Column } from '../../models';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() columns!: Column[];
  @Input() data!: any[];

  @Output() removeEmitter: EventEmitter<number> = new EventEmitter<number>();
  onRemove(id: number) {
    this.removeEmitter.emit(id);
  }
}
