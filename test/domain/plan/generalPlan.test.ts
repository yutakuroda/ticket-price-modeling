import { addBusinessDays, isFirstDayOfMonth, nextSaturday } from "date-fns";

import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";
import { GeneralPlan } from "domain/plan";

describe("CinemaCitizenPlan", () => {
  describe(".isAvailable", () => {
    test("trueを返す", () => {
      const cunstomer = new Customer(
        new Age(20),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None
      );

      expect(GeneralPlan.isAvailable(cunstomer)).toBe(true);
    });
  });

  describe(".price", () => {
    test("映画の日で、平日20時までの場合、1200円を返す", () => {
      const cinemaWeekday = new CinemaDate("2022-11-01T19:59:59.000+09:00");

      expect(GeneralPlan.price(cinemaWeekday).value).toBe(1200);
    });

    test("映画の日で、平日20時以降の場合、1200円を返す", () => {
      const cinemaWeekday = new CinemaDate("2022-11-01T20:00:00.000+09:00");

      expect(GeneralPlan.price(cinemaWeekday).value).toBe(1200);
    });

    test("映画の日で、土日20時までの場合、1200円を返す", () => {
      const cinemaSaturday = new CinemaDate("2022-10-01T19:59:59.000+09:00");

      expect(GeneralPlan.price(cinemaSaturday).value).toBe(1200);
    });

    test("映画の日で、土日20時以降の場合、1200円を返す", () => {
      const cinemaSaturday = new CinemaDate("2022-10-01T20:00:00.000+09:00");

      expect(GeneralPlan.price(cinemaSaturday).value).toBe(1200);
    });

    test("映画の日ではなく、平日20時までの場合、1900円を返す。ただし祝日は考慮していない", () => {
      const weekday = addBusinessDays(new Date(), 1);
      if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);

      weekday.setHours(19, 59, 59);
      const cinemaWeekday = new CinemaDate(weekday.toISOString());

      expect(GeneralPlan.price(cinemaWeekday).value).toBe(1900);
    });

    test("映画の日ではなく、平日20時以降の場合、1400円を返す。ただし祝日は考慮していない", () => {
      const weekday = addBusinessDays(new Date(), 1);
      if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);

      weekday.setHours(20, 0, 0);
      const cinemaWeekday = new CinemaDate(weekday.toISOString());

      expect(GeneralPlan.price(cinemaWeekday).value).toBe(1400);
    });

    test("映画の日ではなく、土日20時までの場合、1900円を返す。ただし祝日は考慮していない", () => {
      const saturday = nextSaturday(new Date());
      if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);

      saturday.setHours(19, 59, 59);
      const cinemaSaturday = new CinemaDate(saturday.toISOString());

      expect(GeneralPlan.price(cinemaSaturday).value).toBe(1900);
    });

    test("映画の日ではなく、土日20時以降の場合、1400円を返す。ただし祝日は考慮していない", () => {
      const saturday = nextSaturday(new Date());
      if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);

      saturday.setHours(20, 0, 0);
      const cinemaSaturday = new CinemaDate(saturday.toISOString());

      expect(GeneralPlan.price(cinemaSaturday).value).toBe(1400);
    });
  });
});
