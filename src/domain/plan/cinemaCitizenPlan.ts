import { CINEMA_CITIZEN_CATEGORY, Customer } from "domain/customer";
import { Plan } from "domain/plan/plan";

export class CinemaCitizenPlan implements Plan {
  isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.age.value >= 60) return false;
    if (cunstomer.cinemaCitizenCategory !== CINEMA_CITIZEN_CATEGORY.Member)
      return false;

    return true;
  }

  price(now: Date): number {
    if ([1, 2, 3, 4, 5].includes(now.getDay())) return 1000; // 平日
    if (now.getHours() >= 20) return 1000; // 20時以降
    if (now.getDate() === 1) return 1200; // 映画の日(毎月1日)

    return 1300;
  }
}
