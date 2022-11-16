import { CINEMA_CITIZEN_CATEGORY, Customer } from "domain/customer";
import { Plan } from "domain/plan/plan";
import { Price } from "domain/plan/price";

export const CinemaCitizenSeniorPlan: Plan = class {
  static readonly MINIMUM_AGE = 60;

  static planName(): string {
    return "シネマシティズン（60才以上）";
  }

  static isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.age.value < this.MINIMUM_AGE) return false;
    if (cunstomer.cinemaCitizenCategory !== CINEMA_CITIZEN_CATEGORY.Member)
      return false;

    return true;
  }

  static price(date: Date): Price {
    return new Price(1000);
  }
};
