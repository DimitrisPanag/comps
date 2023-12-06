import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ElementsModule, CollectionsModule, RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comps';
}
