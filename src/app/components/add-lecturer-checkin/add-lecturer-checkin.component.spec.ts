import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLecturerCheckinComponent } from './add-lecturer-checkin.component';

describe('AddLecturerCheckinComponent', () => {
  let component: AddLecturerCheckinComponent;
  let fixture: ComponentFixture<AddLecturerCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLecturerCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLecturerCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
