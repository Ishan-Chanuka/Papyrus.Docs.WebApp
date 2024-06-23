import { Component, ElementRef, ViewChild } from '@angular/core';
import { TexteditorComponent } from '../../texteditor/texteditor.component';
import { CardComponent } from '../../common/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-meetingminutes',
  standalone: true,
  imports: [TexteditorComponent, CardComponent, FormsModule, CommonModule],
  templateUrl: './meetingminutes.component.html',
  styleUrl: './meetingminutes.component.css'
})
export class MeetingminutesComponent {

  @ViewChild('pdfContent') pdfContent!: ElementRef;

  meetingDate: string = '';
  meetingNumber: string = '';
  discussionPoints: string = '';
  newAttendee: string = '';
  attendanceList: string[] = ['Ishan', 'Kasun'];

  constructor() {}

  onSubmit() {
  }

  exportAsPDF() {
    const pdf = new jsPDF('p', 'mm', 'a4');

    const contentToExport = this.pdfContent.nativeElement;

    html2canvas(contentToExport).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // mm (A4 width)
      const pageHeight = 295; // mm (A4 height)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('meeting_minutes.pdf');
    });
  }
}
