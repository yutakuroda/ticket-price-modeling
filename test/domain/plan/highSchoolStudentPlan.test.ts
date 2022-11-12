import { addBusinessDays, isFirstDayOfMonth, nextSaturday } from "date-fns";

import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { HighSchoolStudentPlan } from "domain/plan";

describe("CinemaCitizenPlan", () => {
  describe(".isAvailable", () => {
    test("中学生の場合、trueを返す", () => {
      const cunstomer = new Customer(
        new Age(15),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.JuniorHighSchool
      );

      expect(HighSchoolStudentPlan.isAvailable(cunstomer)).toBe(true);
    });

    test("高校生の場合、trueを返す", () => {
      const cunstomer = new Customer(
        new Age(15),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.SeniorHighSchool
      );

      expect(HighSchoolStudentPlan.isAvailable(cunstomer)).toBe(true);
    });

    test("それ以外の場合、falseを返す", () => {
      const cunstomer = new Customer(
        new Age(15),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.University
      );

      expect(HighSchoolStudentPlan.isAvailable(cunstomer)).toBe(false);
    });
  });

  describe(".price", () => {
    test("映画の日で、平日20時までの場合、1000円を返す", () => {
      const cinemaWeekday = new Date("2022-11-01T19:59:59.000+09:00");

      expect(HighSchoolStudentPlan.price(cinemaWeekday)).toBe(1000);
    });

    test("映画の日で、平日20時以降の場合、1000円を返す", () => {
      const cinemaWeekday = new Date("2022-11-01T20:00:00.000+09:00");

      expect(HighSchoolStudentPlan.price(cinemaWeekday)).toBe(1000);
    });

    test("映画の日で、土日20時までの場合、1000円を返す", () => {
      const cinemaSaturday = new Date("2022-10-01T19:59:59.000+09:00");

      expect(HighSchoolStudentPlan.price(cinemaSaturday)).toBe(1000);
    });

    test("映画の日で、土日20時以降の場合、1000円を返す", () => {
      const cinemaSaturday = new Date("2022-10-01T20:00:00.000+09:00");

      expect(HighSchoolStudentPlan.price(cinemaSaturday)).toBe(1000);
    });

    test("映画の日ではなく、平日20時までの場合、1000円を返す。ただし祝日は考慮していない", () => {
      const weekday = addBusinessDays(new Date(), 1);
      if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);

      weekday.setHours(19, 59, 59);

      expect(HighSchoolStudentPlan.price(weekday)).toBe(1000);
    });

    test("映画の日ではなく、平日20時以降の場合、1000円を返す。ただし祝日は考慮していない", () => {
      const weekday = addBusinessDays(new Date(), 1);
      if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);

      weekday.setHours(20, 0, 0);

      expect(HighSchoolStudentPlan.price(weekday)).toBe(1000);
    });

    test("映画の日ではなく、土日20時までの場合、1000円を返す。ただし祝日は考慮していない", () => {
      const saturday = nextSaturday(new Date());
      if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);

      saturday.setHours(19, 59, 59);

      expect(HighSchoolStudentPlan.price(saturday)).toBe(1000);
    });

    test("映画の日ではなく、土日20時以降の場合、1000円を返す。ただし祝日は考慮していない", () => {
      const saturday = nextSaturday(new Date());
      if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);

      saturday.setHours(20, 0, 0);

      expect(HighSchoolStudentPlan.price(saturday)).toBe(1000);
    });
  });
});
