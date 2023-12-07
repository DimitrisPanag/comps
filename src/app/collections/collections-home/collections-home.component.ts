import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collections-home',
  standalone: true,
  imports: [CommonModule, SharedModule, TableComponent],
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {

  data = [
    {name: 'James', age: 30, job: 'Designer'},
    {name: 'Jill', age: 24, job: 'Engineer'},
    {name: 'Elyse', age: 32, job: 'Engineer'}];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}];

  constructor() {}

  ngOnInit() {

  }

}
