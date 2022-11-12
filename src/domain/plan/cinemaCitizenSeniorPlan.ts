import { CINEMA_CITIZEN_CATEGORY, Customer } from "domain/customer";
import { Plan } from "domain/plan/plan";

export const CinemaCitizenSeniorPlan: Plan = class {
  static isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.age.value < 60) return false;
    if (cunstomer.cinemaCitizenCategory !== CINEMA_CITIZEN_CATEGORY.Member)
      return false;

    return true;
  }

  static price(date: Date): number {
    return 1000;
  }
};
