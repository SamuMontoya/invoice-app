import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Invoice } from '../../models';
import { ClientInformationComponent } from '../client-information/client-information.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ClientInformationComponent, MatIconModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() invoice!: Invoice;
  @Output() onAddItemEmitter: EventEmitter<boolean> = new EventEmitter();

  onAddItem(): void {
    this.onAddItemEmitter.emit(true);
  }
}
