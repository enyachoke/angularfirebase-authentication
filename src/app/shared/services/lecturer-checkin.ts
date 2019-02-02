import { GeoPoint } from '@firebase/firestore-types';

export interface LecturerCheckin {
  [x: string]: any;
  checkin: any;
    $key: string;
    firstName: string;
    lastName: string;
    className: string;
    timestamp: Date;
    radius: Number;
    location: { geopoint: GeoPoint; geohash: string; };
}
