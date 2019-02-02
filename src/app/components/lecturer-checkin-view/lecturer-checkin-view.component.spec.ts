import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerCheckinViewComponent } from './lecturer-checkin-view.component';

describe('LecturerCheckinViewComponent', () => {
  let component: LecturerCheckinViewComponent;
  let fixture: ComponentFixture<LecturerCheckinViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerCheckinViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerCheckinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
