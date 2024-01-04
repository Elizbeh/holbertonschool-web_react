export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [property: string]: any;
}

export interface Directors extends Teacher {
// Additionnal property for Directors
numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


// Define the printTeacher function
 const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return `${firstLetter}.${fullLastName}`;
 }

 export interface StudentInterface {
  firstName: string;
  lastName: string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName
  }
}
