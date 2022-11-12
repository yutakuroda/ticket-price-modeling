import { BestPlanCalculator } from "domain/bestPlanCalculator";
import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";

const cunstomer = new Customer(
  new Age(50),
  CINEMA_CITIZEN_CATEGORY.Member,
  DISABILITY_CATEGORY.Handicapped,
  SCHOOL_CATEGORY.University
);
const now = new Date();
const bestPlan = BestPlanCalculator.calculate(cunstomer, now);

console.log(bestPlan.price(now));
