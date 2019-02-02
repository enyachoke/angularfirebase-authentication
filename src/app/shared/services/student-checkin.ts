export class StudentCheckin {
    $key: string;
    admissionNumber: string;
    timestamp: Date;
    location: {
        latitude: number;
        longitude: number;
    };
}
