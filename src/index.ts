import { Age } from "domain/customer/age";
import { BestPlanCalculator } from "domain/bestPlanCalculator";
import { CINEMA_CITIZEN_CATEGORY } from "domain/customer/cinemaCitizenCategory";
import { Customer } from "domain/customer/customer";
import { DISABILITY_CATEGORY } from "domain/customer/disabilityCategory";
import { SCHOOL_CATEGORY } from "domain/customer/schoolCategory";

const cunstomer = new Customer(
  new Age(50),
  CINEMA_CITIZEN_CATEGORY.Member,
  DISABILITY_CATEGORY.Handicapped,
  SCHOOL_CATEGORY.University
);

const now = new Date();

const bestPlan = new BestPlanCalculator().calculate(cunstomer, now);

console.log(bestPlan.price());
