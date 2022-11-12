import { BestPlanCalculator } from "domain/bestPlanCalculator";
import { CINEMA_CITIZEN_CATEGORY } from "domain/cinemaCitizenCategory";
import { Customer } from "domain/customer";
import { DISABILITY } from "domain/disability";

const cunstomer = new Customer(
  50,
  CINEMA_CITIZEN_CATEGORY.Member,
  DISABILITY.Handicapped
  //   SCHOOL_CATEGORY.University
);
const now = new Date();

const bestPlan = new BestPlanCalculator().calculate(cunstomer, now);

console.log(bestPlan.price());
