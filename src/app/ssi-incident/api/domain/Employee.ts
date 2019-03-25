export class Employee {
  id: string;
  CI: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
}

export class EmployeeDTO {


  constructor(CI: string, firstName: string, lastName: string, address: string, phone: string) {
    this.CI = CI;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
  }

  id: string;
  CI: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
}
