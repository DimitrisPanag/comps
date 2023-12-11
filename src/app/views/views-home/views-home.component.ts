import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
  selector: 'app-views-home',
  standalone: true,
  imports: [StatisticsComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {

}
