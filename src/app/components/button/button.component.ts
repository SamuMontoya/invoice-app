import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  handleClick(): void {
    this.onClick.emit();
  }
}
