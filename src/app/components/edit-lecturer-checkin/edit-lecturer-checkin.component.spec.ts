import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLecturerCheckinComponent } from './edit-lecturer-checkin.component';

describe('EditLecturerCheckinComponent', () => {
  let component: EditLecturerCheckinComponent;
  let fixture: ComponentFixture<EditLecturerCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLecturerCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLecturerCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
