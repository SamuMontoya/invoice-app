import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Client } from '../../models';
import { InfoWithIconComponent } from '../info-with-icon/info-with-icon.component';

@Component({
  selector: 'app-client-information',
  standalone: true,
  imports: [MatIconModule, InfoWithIconComponent],
  templateUrl: './client-information.component.html',
})
export class ClientInformationComponent {
  @Input() client!: Client;
}
