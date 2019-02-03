import { Component, OnInit } from '@angular/core';
import { LecturerCheckinService } from '../../shared/services/lecturer-checkin.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
@Component({
  selector: 'app-add-lecturer-checkin',
  templateUrl: './add-lecturer-checkin.component.html',
  styleUrls: ['./add-lecturer-checkin.component.css']
})
export class AddLecturerCheckinComponent implements OnInit {

  public checkinForm: FormGroup;  // Define FormGroup to checkin's form
  lat: number;
  lng: number;

  constructor(
    public crudApi: LecturerCheckinService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }


  ngOnInit() {
    this.crudApi.GetcheckinsList();  // Call GetcheckinsList() before main form is being called
    this.lecturerForm();              // Call checkin form when component is ready
  }

  // Reactive checkin form
  lecturerForm() {
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
    /// locate the lecturer's  device(central device)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('Position', position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        const data = this.checkinForm.value;
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        data.location = coords;
        this.crudApi.Addcheckin(data).then((result) => {
          this.toastr.success(this.checkinForm.controls['firstName'].value + ' successfully added!');
          // Show success message when data is successfully submited
          this.ResetForm();  // Reset form when clicked on reset button
        }).catch((error) => {
          console.log('Error', error);
        }); // Submit checkin data using CRUD API
      }, (error) => {
        console.log('Error', error);
      });
    }
  }

}
