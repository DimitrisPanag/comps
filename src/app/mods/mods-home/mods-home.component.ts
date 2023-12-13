import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-mods-home',
  standalone: true,
  imports: [SharedModule, CommonModule ,ModalComponent, AccordionComponent],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  modalOpen = false;

  items = [
    {title: 'Why is the sky blue?', content: 'The sky has the color blue, because of the air particles.'},
    {title: 'What does an orange taste like?', content: 'An orange has a sweet/sour taste and is rich in Vitamin B.'},
    {title: 'What color are the cats that usually rest on top of roofs?', content: 'These types of cats are usually orange colored.'}
  ];

  constructor() {}

  ngOnInit() {

  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }
}
