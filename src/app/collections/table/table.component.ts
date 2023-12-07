import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input('class') classNames = '';

  @Input() data = [] as any[];
  @Input() headers = [] as any[];
  
  constructor() {}

  ngOnInit() {

  }

}
