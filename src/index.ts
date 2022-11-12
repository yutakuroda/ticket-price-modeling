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
  SCHOOL_CATEGORY.None
);
const date = new Date();
const bestPlan = BestPlanCalculator.calculate(cunstomer, date);

console.log(
  `最適なプランは「${bestPlan.planName()}」です。
    現在日時は${date.toLocaleString()}で、料金は${bestPlan.price(date)}円です。`
);
