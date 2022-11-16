import { addBusinessDays, isFirstDayOfMonth, nextSaturday } from "date-fns";

import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { DisabilityUnderHighSchoolStudentPlan } from "domain/plan";

describe("CinemaCitizenPlan", () => {
  describe(".isAvailable", () => {
    test("障がい者手帳を持ち、かつ高校生以下の場合、trueを返す", () => {
      const cunstomer = new Customer(
        new Age(18),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.Handicapped,
        SCHOOL_CATEGORY.SeniorHighSchool
      );

      expect(DisabilityUnderHighSchoolStudentPlan.isAvailable(cunstomer)).toBe(
        true
      );
    });

    test("障がい者手帳を持たない場合、falseを返す", () => {
      const cunstomer = new Customer(
        new Age(18),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.SeniorHighSchool
      );

      expect(DisabilityUnderHighSchoolStudentPlan.isAvailable(cunstomer)).toBe(
        false
      );
    });

    test("障がい者手帳を持ち、かつ大学生以上場合、falseを返す", () => {
      const cunstomer = new Customer(
        new Age(18),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.Handicapped,
        SCHOOL_CATEGORY.University
      );

      expect(DisabilityUnderHighSchoolStudentPlan.isAvailable(cunstomer)).toBe(
        false
      );
    });
  });

  describe(".price", () => {
    test("映画の日で、平日20時までの場合、900円を返す", () => {
      const cinemaWeekday = new Date("2022-11-01T19:59:59.000+09:00");

      expect(
        DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value
      ).toBe(900);
    });

    test("映画の日で、平日20時以降の場合、900円を返す", () => {
      const cinemaWeekday = new Date("2022-11-01T20:00:00.000+09:00");

      expect(
        DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value
      ).toBe(900);
    });

    test("映画の日で、土日20時までの場合、900円を返す", () => {
      const cinemaSaturday = new Date("2022-10-01T19:59:59.000+09:00");

      expect(
        DisabilityUnderHighSchoolStudentPlan.price(cinemaSaturday).value
      ).toBe(900);
    });

    test("映画の日で、土日20時以降の場合、900円を返す", () => {
      const cinemaSaturday = new Date("2022-10-01T20:00:00.000+09:00");

      expect(
        DisabilityUnderHighSchoolStudentPlan.price(cinemaSaturday).value
      ).toBe(900);
    });

    test("映画の日ではなく、平日20時までの場合、900円を返す。ただし祝日は考慮していない", () => {
      const weekday = addBusinessDays(new Date(), 1);
      if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);

      weekday.setHours(19, 59, 59);

      expect(DisabilityUnderHighSchoolStudentPlan.price(weekday).value).toBe(
        900
      );
    });

    test("映画の日ではなく、平日20時以降の場合、900円を返す。ただし祝日は考慮していない", () => {
      const weekday = addBusinessDays(new Date(), 1);
      if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);

      weekday.setHours(20, 0, 0);

      expect(DisabilityUnderHighSchoolStudentPlan.price(weekday).value).toBe(
        900
      );
    });

    test("映画の日ではなく、土日20時までの場合、900円を返す。ただし祝日は考慮していない", () => {
      const saturday = nextSaturday(new Date());
      if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);

      saturday.setHours(19, 59, 59);

      expect(DisabilityUnderHighSchoolStudentPlan.price(saturday).value).toBe(
        900
      );
    });

    test("映画の日ではなく、土日20時以降の場合、900円を返す。ただし祝日は考慮していない", () => {
      const saturday = nextSaturday(new Date());
      if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);

      saturday.setHours(20, 0, 0);

      expect(DisabilityUnderHighSchoolStudentPlan.price(saturday).value).toBe(
        900
      );
    });
  });
});
