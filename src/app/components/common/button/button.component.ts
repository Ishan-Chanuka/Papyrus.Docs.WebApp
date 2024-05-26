import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  constructor() {
    this.label = '';
    this.class = ''
  }

  @Input() label: string;
  @Input() class: string;
  @Output() onClick = new EventEmitter<Event>();
}
