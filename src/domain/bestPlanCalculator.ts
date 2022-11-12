import { allPlans, Plan } from "domain/plan";
import { Customer } from "domain/customer";

export class BestPlanCalculator {
  static calculate(cunstomer: Customer, date: Date): Plan {
    const availablePlans = this.filterAvailablePlans(allPlans, cunstomer);
    if (availablePlans.length === 0)
      throw new Error("利用できるプランがありません");

    return this.findBestPricePlan(availablePlans, date);
  }

  private static filterAvailablePlans(
    allPlans: Plan[],
    cunstomer: Customer
  ): Plan[] {
    return allPlans.filter((plan) => plan.isAvailable(cunstomer));
  }

  private static findBestPricePlan(availablePlans: Plan[], date: Date): Plan {
    return availablePlans.reduce((prev, current) => {
      return prev.price(date) <= current.price(date) ? prev : current;
    });
  }
}
