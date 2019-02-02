import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LecturerCheckinService } from '../../shared/services/lecturer-checkin.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-lecturer-checkin',
  templateUrl: './edit-lecturer-checkin.component.html',
  styleUrls: ['./edit-lecturer-checkin.component.css']
})
export class EditLecturerCheckinComponent implements OnInit {

  public checkinForm: FormGroup;  // Define FormGroup to checkin's form
  lat: number;
  lng: number;

  constructor(
    public crudApi: LecturerCheckinService,  // CRUD API services
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ) { }


  ngOnInit() {
    this.editForm();              // Call checkin form when component is ready
   const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.crudApi.Getcheckin(id).subscribe(data => {
      const dataForm =  data.data();
      delete dataForm.location;
      delete dataForm.timestamp;
      this.checkinForm.setValue(dataForm);  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form
    });
  }

  // Reactive checkin form
  editForm() {
    this.checkinForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      className: ['', [Validators.required, Validators.minLength(2)]],
      radius: ['', [Validators.required]]
    });
  }

  // Accessing form control using getters
  get firstName() {
    return this.checkinForm.get('firstName');
  }

  get lastName() {
    return this.checkinForm.get('lastName');
  }


  get className() {
    return this.checkinForm.get('className');
  }

  get radius() {
    return this.checkinForm.get('radius');
  }


  // Reset checkin form's values
  ResetForm() {
    this.checkinForm.reset();
  }

  submitcheckinData() {
    this.getUserLocation();
  }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        const data = this.checkinForm.value;
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        data.location = coords;
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.crudApi.Updatecheckin(data, id).then((result) => {
          this.toastr.success(this.checkinForm.controls['firstName'].value + ' successfully added!');
          // Show success message when data is successfully submited
        }).catch((error) => {
          console.log('Error', error);
        }); // Submit checkin data using CRUD API
      }, (error) => {
        console.log('Error', error);
      });
    }
  }

}
