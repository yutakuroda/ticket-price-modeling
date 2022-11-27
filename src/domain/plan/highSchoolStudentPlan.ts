import { SCHOOL_CATEGORY, Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/plan";
import { Price } from "domain/plan/price";

export const HighSchoolStudentPlan: Plan = class {
  static planName(): string {
    return "中・高校生";
  }

  static isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.schoolCategory === SCHOOL_CATEGORY.JuniorHighSchool)
      return true;
    if (cunstomer.schoolCategory === SCHOOL_CATEGORY.SeniorHighSchool)
      return true;

    return false;
  }

  static price(date: CinemaDate): Price {
    return new Price(1000);
  }
};
