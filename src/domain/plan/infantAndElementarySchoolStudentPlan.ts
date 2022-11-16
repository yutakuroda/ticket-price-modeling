import { Customer } from "domain/customer";
import { Plan } from "domain/plan/plan";
import { Price } from "domain/plan/price";

export const InfantAndElementarySchoolStudentPlan: Plan = class {
  static readonly MINIMUM_AGE = 3;
  static readonly MAXIMUM_AGE = 12;

  static planName(): string {
    return "幼児（3才以上）・小学生	";
  }

  static isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.age.value < this.MINIMUM_AGE) return false;
    if (cunstomer.age.value > this.MAXIMUM_AGE) return false;

    return true;
  }

  static price(date: Date): Price {
    return new Price(1000);
  }
};
