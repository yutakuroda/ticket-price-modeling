import { BestPlanCalculator } from "domain/bestPlanCalculator";
import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";

const cunstomer = new Customer(
  new Age(70),
  CINEMA_CITIZEN_CATEGORY.Guest,
  DISABILITY_CATEGORY.None,
  SCHOOL_CATEGORY.University
);
const date = new Date();
const bestPlan = BestPlanCalculator.calculate(cunstomer, date);

console.log(
  `最適なプランは${bestPlan.planName()}です。料金は${bestPlan.price(
    date
  )}円です。`
);
