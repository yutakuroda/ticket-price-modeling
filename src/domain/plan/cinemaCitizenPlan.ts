import { Customer } from "domain/customer/customer";
import { Plan } from "domain/plan/plan";

export class CinemaCitizenPlan implements Plan {
  isAvailable(cunstomer: Customer): boolean {
    return true;
  }

  price(now: Date): number {
    return 1000;
  }
}
