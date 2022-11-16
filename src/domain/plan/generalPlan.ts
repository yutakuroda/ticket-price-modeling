import { Customer } from "domain/customer";
import { Plan } from "domain/plan/plan";
import { Price } from "domain/plan/price";

export const GeneralPlan: Plan = class {
  static planName(): string {
    return "一般";
  }

  static isAvailable(cunstomer: Customer): boolean {
    return true;
  }

  static price(date: Date): Price {
    if (date.getDate() === 1) return new Price(1200); // 映画の日(毎月1日)
    if (date.getHours() >= 20) return new Price(1400); // 20時以降

    return new Price(1900);
  }
};
