import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: 'AIzaSyDovqc57TVnXqI6tFEQlJltnKI64HAMUyk',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: "https://digital-attendance-syste-281bc.firebaseio.com",
  projectId: 'digital-attendance-syste-281bc',
  storageBucket: 'YOUR_STORAGE_BUCKET',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Digital Attendance System';
=======
  title = 'angular-lecture-checkin';
  
>>>>>>> bf5ca41beedc9d6099f7c69b734492f631c2254e

  ngOnInit() {
  firebase.initializeApp(config);
  firebase.firestore().settings(settings);
}

}
