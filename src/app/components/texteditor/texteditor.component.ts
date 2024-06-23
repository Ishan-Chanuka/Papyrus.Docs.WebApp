import { Component,  EventEmitter, Output } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-texteditor',
  standalone: true,
  imports: [QuillModule, FormsModule],
  templateUrl: './texteditor.component.html',
  styleUrl: './texteditor.component.css'
})
export class TexteditorComponent {
  @Output() contentChanged = new EventEmitter<string>();

  onContentChanged(event: any) {
    this.contentChanged.emit(event.html);
  }
}
