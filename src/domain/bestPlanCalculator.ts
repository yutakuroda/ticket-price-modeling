import { allPlans, Plan } from "domain/plan";
import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";

export class BestPlanCalculator {
  static calculate(cunstomer: Customer, date: CinemaDate): Plan {
    const availablePlans = allPlans.availablePlans(cunstomer);
    if (availablePlans.count() === 0)
      throw new Error("利用できるプランがありません");

    return availablePlans.bestPricePlan(date);
  }
}
