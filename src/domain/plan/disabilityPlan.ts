import {
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/plan";
import { Price } from "domain/plan/price";

export const DisabilityPlan: Plan = class {
  static planName(): string {
    return "障がい者（学生以上）";
  }

  static isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.disabilityCategory === DISABILITY_CATEGORY.None) return false;
    if (cunstomer.schoolCategory === SCHOOL_CATEGORY.JuniorHighSchool)
      return false;
    if (cunstomer.schoolCategory === SCHOOL_CATEGORY.SeniorHighSchool)
      return false;

    return true;
  }

  static price(date: CinemaDate): Price {
    return new Price(1000);
  }
};
