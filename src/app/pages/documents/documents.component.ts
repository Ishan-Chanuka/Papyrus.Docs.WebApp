import { Component } from '@angular/core';
import { CardComponent } from '../../components/common/card/card.component';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {

}
