import { Component, OnInit } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { SharedModule } from '../../shared/shared.module';
import { ItemsListComponent } from '../items-list/items-list.component';

@Component({
  selector: 'app-views-home',
  standalone: true,
  imports: [SharedModule, StatisticsComponent, ItemsListComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
  stats = [
    { value: 25, label: 'Favourites' },
    { value: 867, label: 'Page Views' },
    { value: 60, label: 'Users'}
  ];

  items = [
    { image: '/assets/images/couch.jpeg',
     title: 'Couch',
      description: 'This is a great couch to sit on'},

    { image: '/assets/images/dresser.jpeg',
     title: 'Dresser',
      description: 'This is a great dresser to put stuff in'}
  ];
  constructor() {}

  ngOnInit() {

  }
}
