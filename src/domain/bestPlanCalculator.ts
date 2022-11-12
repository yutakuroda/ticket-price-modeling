import { allPlans } from "domain/plan/allPlans";
import { Customer } from "domain/customer/customer";
import { Plan } from "domain/plan/plan";

export class BestPlanCalculator {
  static calculate(cunstomer: Customer, now: Date): any {
    const availablePlans = this.filterAvailablePlans(allPlans, cunstomer);
    const bestPricePlan = this.findBestPricePlan(availablePlans, now);

    return bestPricePlan;
  }

  private static filterAvailablePlans(
    allPlans: Plan[],
    cunstomer: Customer
  ): Plan[] {
    return allPlans.filter((plan) => plan.isAvailable(cunstomer));
  }

  private static findBestPricePlan(availablePlans: Plan[], now: Date): Plan {
    return availablePlans.reduce((prev, current) => {
      return prev.price(now) <= current.price(now) ? prev : current;
    });
  }
}
