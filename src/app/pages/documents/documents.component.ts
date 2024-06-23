import { Component } from '@angular/core';
import { CardComponent } from '../../components/common/card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {
  constructor(private router: Router){}

  NotesPage(){
    this.router.navigate(["/notes"])
  }

  MeetingMinutesPage(){
    this.router.navigate(["/meetingminutes"])
  }
}
