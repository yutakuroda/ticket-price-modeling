import { SCHOOL_CATEGORY, Customer } from "domain/customer";
import { Plan } from "domain/plan/plan";

export const UniversityStudentPlan: Plan = class {
  static planName(): string {
    return "学生（大・専）	";
  }

  static isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.schoolCategory === SCHOOL_CATEGORY.University) return true;
    if (cunstomer.schoolCategory === SCHOOL_CATEGORY.VocationalSchool)
      return true;
    if (cunstomer.schoolCategory === SCHOOL_CATEGORY.GraduateSchool)
      return true;

    return false;
  }

  static price(date: Date): number {
    if (date.getDate() === 1) return 1200; // 映画の日(毎月1日)
    if (date.getHours() >= 20) return 1400; // 20時以降

    return 1500;
  }
};
