import { CINEMA_CITIZEN_CATEGORY } from "domain/cinemaCitizenCategory";
import { DISABILITY_CATEGORY } from "domain/disabilityCategory";

export class Customer {
  constructor(
    public age: number,
    public cinemaCitizen: CINEMA_CITIZEN_CATEGORY,
    public disability: DISABILITY_CATEGORY
  ) {}
}
