import {Company} from './Company';

export class Department {
  id: string;
  code: string;
  name: string;
  description: string;
}

export class DepartmentDTO {

  constructor(code: string, name: string, description: string) {
    this.code = code;
    this.name = name;
    this.description = description;
  }
  code: string;
  name: string;
  description: string;
}
