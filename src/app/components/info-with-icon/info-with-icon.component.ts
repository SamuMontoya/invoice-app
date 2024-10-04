import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-info-with-icon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './info-with-icon.component.html',
})
export class InfoWithIconComponent {
  @Input() icon!: string;
  @Input() boldText!: string;
  @Input() complementText!: string;
}
