import { Component } from '@angular/core';
import { TexteditorComponent } from '../../texteditor/texteditor.component';
import { CardComponent } from '../../common/card/card.component';

@Component({
  selector: 'app-meetingminutes',
  standalone: true,
  imports: [TexteditorComponent, CardComponent],
  templateUrl: './meetingminutes.component.html',
  styleUrl: './meetingminutes.component.css'
})
export class MeetingminutesComponent {

  meetingDate: string = '';
  meetingNumber: string = '';
  discussionPoints: string = '';
  newAttendee: string = '';
  attendanceList: string[] = [];

  onSubmit() {
    // Logic to handle form submission
    // This could include saving the data to a database or generating a PDF report
    console.log({
      meetingDate: this.meetingDate,
      meetingNumber: this.meetingNumber,
      discussionPoints: this.discussionPoints,
      attendanceList: this.attendanceList
    });
  }
}
