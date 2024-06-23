import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingminutesComponent } from './meetingminutes.component';

describe('MeetingminutesComponent', () => {
  let component: MeetingminutesComponent;
  let fixture: ComponentFixture<MeetingminutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingminutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetingminutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
