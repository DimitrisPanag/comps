import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ElementsModule } from './elements/elements.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ElementsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comps';
}
