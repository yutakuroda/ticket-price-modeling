import { CINEMA_CITIZEN } from "domain/cinemaCitizen";
import { DISABILITY } from "domain/disability";

export class Customer {
  age: number;
  cinemaCitizen: CINEMA_CITIZEN;
  disability: DISABILITY;

  constructor(
    age: number,
    cinemaCitizen: CINEMA_CITIZEN,
    disability: DISABILITY
  ) {
    this.age = age;
    this.cinemaCitizen = cinemaCitizen;
    this.disability = disability;
  }
}
