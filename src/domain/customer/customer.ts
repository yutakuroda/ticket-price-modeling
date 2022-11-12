import { Age } from "domain/customer/age";
import { CINEMA_CITIZEN_CATEGORY } from "domain/customer/cinemaCitizenCategory";
import { DISABILITY_CATEGORY } from "domain/customer/disabilityCategory";
import { SCHOOL_CATEGORY } from "domain/customer/schoolCategory";

export class Customer {
  constructor(
    public age: Age,
    public cinemaCitizen: CINEMA_CITIZEN_CATEGORY,
    public disability: DISABILITY_CATEGORY,
    public schoolCategory: SCHOOL_CATEGORY
  ) {}
}
