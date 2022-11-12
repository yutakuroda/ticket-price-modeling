import { allPlans } from "domain/plan/allPlans";
import { Customer } from "domain/customer/customer";

export class BestPlanCalculator {
  static calculate(cunstomer: Customer, now: Date): any {
    const availablePlans = allPlans.filter((plan) =>
      plan.isAvailable(cunstomer)
    );

    const bestPricePlan = availablePlans.find(
      (plan) =>
        plan.price() === Math.min(...availablePlans.map((plan) => plan.price()))
    );

    return bestPricePlan;
  }
}
