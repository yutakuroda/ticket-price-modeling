import { CINEMA_CITIZEN_CATEGORY, Customer } from "domain/customer";
import { Plan } from "domain/plan/plan";

export const GeneralPlan: Plan = class {
  static planName(): string {
    return "一般";
  }

  static isAvailable(cunstomer: Customer): boolean {
    return true;
  }

  static price(date: Date): number {
    if (date.getDate() === 1) return 1200; // 映画の日(毎月1日)
    if (date.getHours() >= 20) return 1400; // 20時以降

    return 1900;
  }
};
