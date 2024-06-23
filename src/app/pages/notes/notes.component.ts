import { Component } from '@angular/core';
import { TexteditorComponent } from '../../components/texteditor/texteditor.component';
import { CardComponent } from '../../components/common/card/card.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [TexteditorComponent, CardComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

}
