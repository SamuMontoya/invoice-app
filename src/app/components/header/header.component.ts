import { Component, Input } from '@angular/core';
import { Invoice } from '../../models';
import { ClientInformationComponent } from '../client-information/client-information.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ClientInformationComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() invoice!: Invoice;
}
