import { CINEMA_CITIZEN_CATEGORY } from "domain/cinemaCitizenCategory";
import { DISABILITY } from "domain/disability";

export class Customer {
  constructor(
    public age: number,
    public cinemaCitizen: CINEMA_CITIZEN_CATEGORY,
    public disability: DISABILITY
  ) {}
}
