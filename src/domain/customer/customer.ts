import { Age } from "domain/customer/age";
import { CINEMA_CITIZEN_CATEGORY } from "domain/customer/cinemaCitizenCategory";
import { DISABILITY_CATEGORY } from "domain/customer/disabilityCategory";
import { SCHOOL_CATEGORY } from "domain/customer/schoolCategory";

export class Customer {
  constructor(
    public age: Age,
    public cinemaCitizenCategory: CINEMA_CITIZEN_CATEGORY,
    public disabilityCategory: DISABILITY_CATEGORY,
    public schoolCategoryCategory: SCHOOL_CATEGORY
  ) {}
}
