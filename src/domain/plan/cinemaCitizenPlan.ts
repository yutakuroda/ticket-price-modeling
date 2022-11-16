import { CINEMA_CITIZEN_CATEGORY, Customer } from "domain/customer";
import { Plan } from "domain/plan/plan";
import { Price } from "domain/plan/price";

export const CinemaCitizenPlan: Plan = class {
  static readonly MAXIMUM_AGE = 59;

  static planName(): string {
    return "シネマシティズン";
  }

  static isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.age.value > this.MAXIMUM_AGE) return false;
    if (cunstomer.cinemaCitizenCategory !== CINEMA_CITIZEN_CATEGORY.Member)
      return false;

    return true;
  }

  static price(date: Date): Price {
    if ([1, 2, 3, 4, 5].includes(date.getDay())) return new Price(1000); // 平日
    if (date.getHours() >= 20) return new Price(1000); // 20時以降
    if (date.getDate() === 1) return new Price(1200); // 映画の日(毎月1日)

    return new Price(1300);
  }
};
