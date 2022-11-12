import { Plan } from "domain/plan";
import { Customer } from "domain/customer";

export class CheapestPlanCalculator {
  calculate(cunstomer: Customer, now: Date): Plan {
    return new Plan();
  }
}
