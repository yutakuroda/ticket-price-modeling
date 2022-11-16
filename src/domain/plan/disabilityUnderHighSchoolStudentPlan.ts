import {
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { Plan } from "domain/plan/plan";
import { Price } from "domain/plan/price";

export const DisabilityUnderHighSchoolStudentPlan: Plan = class {
  static planName(): string {
    return "障がい者（高校以下）";
  }

  static isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.disabilityCategory === DISABILITY_CATEGORY.None) return false;
    if (cunstomer.schoolCategory === SCHOOL_CATEGORY.JuniorHighSchool)
      return true;
    if (cunstomer.schoolCategory === SCHOOL_CATEGORY.SeniorHighSchool)
      return true;

    return false;
  }

  static price(date: Date): Price {
    return new Price(900);
  }
};
