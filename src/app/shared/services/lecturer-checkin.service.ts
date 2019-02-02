import { Injectable } from '@angular/core';
import { LecturerCheckin } from './lecturer-checkin';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebaseApp from 'firebase/app';
import * as geofirex from 'geofirex';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LecturerCheckinService {
  geo = geofirex.init(firebaseApp);
  checkinsRef: AngularFireList<any>;    // Reference to LecturerCheckin data list, its an Observable
  checkinRef: AngularFireObject<any>;   // Reference to LecturerCheckin object, its an Observable too

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private firestore: AngularFirestore) { }

  // Create LecturerCheckin
  Addcheckin(checkin) {
    checkin.timestamp = new Date();
    const point = this.geo.point(checkin.location.latitude, checkin.location.longitude);
    checkin.location = point.data;
    return this.firestore.collection('lecturer-checkin').add(checkin);
  }

  // Fetch Single LecturerCheckin Object
  Getcheckin(id: string) {
    const docRef = this.firestore.collection('lecturer-checkin').doc(id);
    return  docRef.get();
  }

  // Fetch checkins List
  GetcheckinsList() {
     return this.firestore.collection('lecturer-checkin');
  }

  GetcheckinsStudentList(lecturerCheckin, id) {
    console.log(lecturerCheckin);
    const center = this.geo.point(lecturerCheckin.location.geopoint._lat, lecturerCheckin.location.geopoint._long);
    return this.geo.collection('student-checkin' , ref => ref.where('lecturerCheckin', '==', id))
    .within(center, lecturerCheckin.radius, 'location');
    // return this.firestore.collection('student-checkin', ref => ref.where('lecturerCheckin', '==', id));
 }

  // Update LecturerCheckin Object
  Updatecheckin(checkin: any, id) {
    const point = this.geo.point(checkin.location.latitude, checkin.location.longitude);
    checkin.location = point.data;
    return this.firestore.doc('lecturer-checkin/' + id).update(checkin);
  }

  // Delete LecturerCheckin Object
  Deletecheckin(id: string) {
    return  this.firestore.doc('lecturer-checkin/' + id).delete();
  }
}
