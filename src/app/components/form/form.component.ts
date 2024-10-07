import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Output() createEmitter: EventEmitter<Item> = new EventEmitter();

  counterId: number = 4;

  item: any = {
    id: this.counterId,
    product: '',
    price: '',
    quantity: '',
  };

  onSubmit(): void {
    this.createEmitter.emit(this.item);
    this.counterId++;
    this.item = {
      id: this.counterId,
      product: '',
      price: '',
      quantity: '',
    };
  }
}
