import { Component } from '@angular/core';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-texteditor',
  standalone: true,
  imports: [QuillModule],
  templateUrl: './texteditor.component.html',
  styleUrl: './texteditor.component.css'
})
export class TexteditorComponent {

}
