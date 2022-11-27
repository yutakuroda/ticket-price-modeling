import { addBusinessDays, isFirstDayOfMonth, nextSaturday } from "date-fns";

import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";
import { CinemaCitizenSeniorPlan } from "domain/plan";

describe("CinemaCitizenSeniorPlan", () => {
  describe(".isAvailable", () => {
    test("シネマシティズン会員かつ60歳以上の場合、trueを返す", () => {
      const cunstomer = new Customer(
        new Age(60),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None
      );

      expect(CinemaCitizenSeniorPlan.isAvailable(cunstomer)).toBe(true);
    });

    test("シネマシティズン会員ではない場合、falseを返す", () => {
      const cunstomer = new Customer(
        new Age(60),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None
      );

      expect(CinemaCitizenSeniorPlan.isAvailable(cunstomer)).toBe(false);
    });

    test("59歳未満の場合、falseを返す", () => {
      const cunstomer = new Customer(
        new Age(59),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None
      );

      expect(CinemaCitizenSeniorPlan.isAvailable(cunstomer)).toBe(false);
    });
  });

  describe(".price", () => {
    test("映画の日で、平日20時までの場合、1000円を返す", () => {
      const cinemaWeekday = new CinemaDate("2022-11-01T19:59:59.000+09:00");

      expect(CinemaCitizenSeniorPlan.price(cinemaWeekday).value).toBe(1000);
    });

    test("映画の日で、平日20時以降の場合、1000円を返す", () => {
      const cinemaWeekday = new CinemaDate("2022-11-01T20:00:00.000+09:00");

      expect(CinemaCitizenSeniorPlan.price(cinemaWeekday).value).toBe(1000);
    });

    test("映画の日で、土日20時までの場合、1000円を返す", () => {
      const cinemaSaturday = new CinemaDate("2022-10-01T19:59:59.000+09:00");

      expect(CinemaCitizenSeniorPlan.price(cinemaSaturday).value).toBe(1000);
    });

    test("映画の日で、土日20時以降の場合、1000円を返す", () => {
      const cinemaSaturday = new CinemaDate("2022-10-01T20:00:00.000+09:00");

      expect(CinemaCitizenSeniorPlan.price(cinemaSaturday).value).toBe(1000);
    });

    test("映画の日ではなく、平日20時までの場合、1000円を返す。ただし祝日は考慮していない", () => {
      const weekday = addBusinessDays(new Date(), 1);
      if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);

      weekday.setHours(19, 59, 59);
      const cinemaWeekday = new CinemaDate(weekday.toISOString());

      expect(CinemaCitizenSeniorPlan.price(cinemaWeekday).value).toBe(1000);
    });

    test("映画の日ではなく、平日20時以降の場合、1000円を返す。ただし祝日は考慮していない", () => {
      const weekday = addBusinessDays(new Date(), 1);
      if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);

      weekday.setHours(20, 0, 0);
      const cinemaWeekday = new CinemaDate(weekday.toISOString());

      expect(CinemaCitizenSeniorPlan.price(cinemaWeekday).value).toBe(1000);
    });

    test("映画の日ではなく、土日20時までの場合、1000円を返す。ただし祝日は考慮していない", () => {
      const saturday = nextSaturday(new Date());
      if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);

      saturday.setHours(19, 59, 59);
      const cinemaSaturday = new CinemaDate(saturday.toISOString());

      expect(CinemaCitizenSeniorPlan.price(cinemaSaturday).value).toBe(1000);
    });

    test("映画の日ではなく、土日20時以降の場合、1000円を返す。ただし祝日は考慮していない", () => {
      const saturday = nextSaturday(new Date());
      if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);

      saturday.setHours(20, 0, 0);
      const cinemaSaturday = new CinemaDate(saturday.toISOString());

      expect(CinemaCitizenSeniorPlan.price(cinemaSaturday).value).toBe(1000);
    });
  });
});
