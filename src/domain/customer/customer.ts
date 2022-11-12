import { Age } from "domain/customer/age";
import { CINEMA_CITIZEN_CATEGORY } from "domain/customer/cinemaCitizenCategory";
import { DISABILITY_CATEGORY } from "domain/customer/disabilityCategory";
import { SCHOOL_CATEGORY } from "domain/customer/schoolCategory";

export class Customer {
  constructor(
    public readonly age: Age,
    public readonly cinemaCitizenCategory: CINEMA_CITIZEN_CATEGORY,
    public readonly disabilityCategory: DISABILITY_CATEGORY,
    public readonly schoolCategory: SCHOOL_CATEGORY
  ) {}
}
