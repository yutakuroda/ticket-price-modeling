import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/plan";
import { Price } from "domain/plan/price";

export const SeniorPlan: Plan = class {
  static readonly MINIMUM_AGE = 70;

  static planName(): string {
    return "シニア（70才以上）";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.age.value < this.MINIMUM_AGE) return false;

    return true;
  }

  static price(date: CinemaDate): Price {
    return new Price(1200);
  }
};
