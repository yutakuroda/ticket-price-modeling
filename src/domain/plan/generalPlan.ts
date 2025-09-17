import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/plan";
import { Price } from "domain/plan/price";

export const GeneralPlan: Plan = class {
  static planName(): string {
    return "一般";
  }

  static isAvailable(customer: Customer): boolean {
    return true;
  }

  static price(date: CinemaDate): Price {
    if (date.isCinemaDay()) return new Price(1200);
    if (date.isLateShow()) return new Price(1400);

    return new Price(1900);
  }
};
