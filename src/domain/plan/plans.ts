import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/plan";

export const Plans = class {
  constructor(private readonly plans: Plan[]) {}

  count(): number {
    return this.plans.length;
  }

  availablePlans(customer: Customer) {
    const availablePlans = this.plans.filter((plan) =>
      plan.isAvailable(customer)
    );

    return new Plans(availablePlans);
  }

  bestPricePlan(date: CinemaDate): Plan {
    return this.plans.reduce((prev, current) => {
      return prev.price(date).value <= current.price(date).value
        ? prev
        : current;
    });
  }
};
