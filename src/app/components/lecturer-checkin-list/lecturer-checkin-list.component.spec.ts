import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerCheckinListComponent } from './lecturer-checkin-list.component';

describe('LecturerCheckinListComponent', () => {
  let component: LecturerCheckinListComponent;
  let fixture: ComponentFixture<LecturerCheckinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerCheckinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerCheckinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
