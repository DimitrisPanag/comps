import { Component } from '@angular/core';
import { PlaceholderComponent } from '../placeholder/placeholder.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-elements-home',
  standalone: true,
  imports: [PlaceholderComponent, SharedModule],
  templateUrl: './elements-home.component.html',
  styleUrl: './elements-home.component.css'
})
export class ElementsHomeComponent {

}
