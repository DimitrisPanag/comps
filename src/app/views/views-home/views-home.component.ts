import { Component, OnInit } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-views-home',
  standalone: true,
  imports: [SharedModule,StatisticsComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
  stats = [
    { value: 25, label: 'Favourites' },
    { value: 867, label: 'Page Views' },
    { value: 60, label: 'Users'}
  ];

  constructor() {}

  ngOnInit() {

  }
}
