import { Customer } from "domain/customer";
import { Plan } from "domain/plan/plan";

export const InfantAndElementarySchoolStudentPlan: Plan = class {
  static planName(): string {
    return "幼児（3才以上）・小学生	";
  }

  static isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.age.value < 3) return false;
    if (cunstomer.age.value > 12) return false;

    return true;
  }

  static price(date: Date): number {
    return 1000;
  }
};
