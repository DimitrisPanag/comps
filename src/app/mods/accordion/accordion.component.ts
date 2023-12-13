import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent implements OnInit {
  @Input() items = [] as any [];
  openedItemIndex = 0;

  constructor() {}

  ngOnInit() {

  }

  onClick(index: number){
    if(index === this.openedItemIndex){
      this.openedItemIndex = -1;
    }else{
      this.openedItemIndex = index;
    }
  }
}
