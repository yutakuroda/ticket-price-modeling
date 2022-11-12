import { addBusinessDays, isFirstDayOfMonth, nextSaturday } from "date-fns";

import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { BestPlanCalculator } from "domain/bestPlanCalculator";
import { HighSchoolStudentPlan } from "domain/plan";

describe("BestPlanCalculator", () => {
  describe(".calculate", () => {
    test("シネマシティズン会員の高校生が土日の20時までに英学見る場合、高校生料金になる", () => {
      const cunstomer = new Customer(
        new Age(15),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.SeniorHighSchool
      );

      const saturday = nextSaturday(new Date());
      if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);

      saturday.setHours(19, 59, 59);

      expect(BestPlanCalculator.calculate(cunstomer, saturday)).toBe(
        HighSchoolStudentPlan
      );
    });
  });
});
