import { Plan } from "domain/plan";
import { Customer } from "domain/customer/customer";

export class BestPlanCalculator {
  calculate(cunstomer: Customer, now: Date): Plan {
    return new Plan();
  }
}
