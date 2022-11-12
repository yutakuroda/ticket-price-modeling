import { Customer } from "domain/customer";
import { Plan } from "domain/plan/plan";

export const SeniorPlan: Plan = class {
  static planName(): string {
    return "シニア（70才以上）";
  }

  static isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.age.value < 70) return false;

    return true;
  }

  static price(date: Date): number {
    return 1200;
  }
};
