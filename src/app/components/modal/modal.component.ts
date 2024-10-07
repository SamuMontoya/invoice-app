import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Input() title: string = '';
  @Input() id: number = 0;
  @Input() description: string = '';
  @Input() action: string = '';

  @Output() closeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() actionEmitter: EventEmitter<number> = new EventEmitter<number>();

  onClose(): void {
    this.closeEmitter.emit(false);
  }

  onAction(): void {
    this.actionEmitter.emit(this.id);
  }
}
