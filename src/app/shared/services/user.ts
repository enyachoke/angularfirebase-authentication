export interface User {
   uid: string;
   email: string;
   displayName: string;
   photoURL: string;
   emailVerified: boolean;
   roles: Roles;
}

export interface Roles {
   Student: boolean;
   Admin: boolean;
   Lecturer: boolean;
}
