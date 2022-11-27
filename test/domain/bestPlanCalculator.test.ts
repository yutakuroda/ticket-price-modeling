import { addBusinessDays, isFirstDayOfMonth, nextSaturday } from "date-fns";

import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";
import { BestPlanCalculator } from "domain/bestPlanCalculator";
import { DisabilityPlan, HighSchoolStudentPlan } from "domain/plan";

describe("BestPlanCalculator", () => {
  describe(".calculate", () => {
    test("シネマシティズン会員の高校生が土日の20時までに映画を見る場合、高校生料金になる", () => {
      const cunstomer = new Customer(
        new Age(15),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.SeniorHighSchool
      );

      const saturday = nextSaturday(new Date());
      if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);

      saturday.setHours(19, 59, 59);
      const cinemaSaturday = new CinemaDate(saturday);

      expect(BestPlanCalculator.calculate(cunstomer, cinemaSaturday)).toBe(
        HighSchoolStudentPlan
      );
    });

    test("障害者手帳を持つ80歳の人が平日に映画を見る場合、障害者(学生以上)料金になる", () => {
      const cunstomer = new Customer(
        new Age(80),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.Handicapped,
        SCHOOL_CATEGORY.None
      );

      const weekday = addBusinessDays(new Date(), 1);
      if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);

      weekday.setHours(19, 59, 59);
      const cinemaWeekday = new CinemaDate(weekday);

      expect(BestPlanCalculator.calculate(cunstomer, cinemaWeekday)).toBe(
        DisabilityPlan
      );
    });
  });
});
