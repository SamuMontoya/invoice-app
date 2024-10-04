import { Component, Input } from '@angular/core';
import { Company } from '../../models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() company!: Company;
}
