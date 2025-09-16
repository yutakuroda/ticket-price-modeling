import { BestPlanCalculator } from "domain/bestPlanCalculator";
import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";

const cunstomer = new Customer(
  new Age(20),
  CINEMA_CITIZEN_CATEGORY.Guest,
  DISABILITY_CATEGORY.None,
  SCHOOL_CATEGORY.University,
);
const date = new CinemaDate();
const bestPlan = BestPlanCalculator.calculate(cunstomer, date);

console.log(
  `最適なプランは「${bestPlan.planName()}」です。
    現在日時は${date.toLocaleString()}で、料金は${
      bestPlan.price(date).value
    }円です。`,
);
