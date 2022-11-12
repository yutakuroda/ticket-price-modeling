import { CINEMA_CITIZEN_CATEGORY } from "domain/cinemaCitizenCategory";
import { DISABILITY_CATEGORY } from "domain/disabilityCategory";
import { SCHOOL_CATEGORY } from "domain/schoolCategory";

export class Customer {
  constructor(
    public age: number,
    public cinemaCitizen: CINEMA_CITIZEN_CATEGORY,
    public disability: DISABILITY_CATEGORY,
    public schoolCategory: SCHOOL_CATEGORY
  ) {}
}
