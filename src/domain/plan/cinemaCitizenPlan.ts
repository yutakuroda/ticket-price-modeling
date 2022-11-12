import { CINEMA_CITIZEN_CATEGORY, Customer } from "domain/customer";
import { Plan } from "domain/plan/plan";

export class CinemaCitizenPlan implements Plan {
  isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.age.value >= 60) return false;
    if (cunstomer.cinemaCitizenCategory !== CINEMA_CITIZEN_CATEGORY.Member)
      return false;

    return true;
  }

  price(now: Date): number {
    return 1000;
  }
}
