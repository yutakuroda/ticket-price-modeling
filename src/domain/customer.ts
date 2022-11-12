import { CINEMA_CITIZEN } from "domain/cinemaCitizen";

export class Customer {
  age: number;

  constructor(age: number, cinemaCitizen: CINEMA_CITIZEN) {
    this.age = age;
  }
}
