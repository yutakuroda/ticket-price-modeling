import { addBusinessDays, isFirstDayOfMonth, nextSaturday } from "date-fns";

import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaCitizenPlan } from "domain/plan";

describe("CinemaCitizenPlan", () => {
  describe(".isAvailable", () => {
    test("シネマシティズン会員かつ59歳未満の場合、trueを返す", () => {
      const cunstomer = new Customer(
        new Age(59),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None
      );

      expect(CinemaCitizenPlan.isAvailable(cunstomer)).toBe(true);
    });

    test("シネマシティズン会員ではない場合、falseを返す", () => {
      const cunstomer = new Customer(
        new Age(59),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None
      );

      expect(CinemaCitizenPlan.isAvailable(cunstomer)).toBe(false);
    });

    test("60歳以上の場合、falseを返す", () => {
      const cunstomer = new Customer(
        new Age(60),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None
      );

      expect(CinemaCitizenPlan.isAvailable(cunstomer)).toBe(false);
    });
  });

  describe(".price", () => {
    test("映画の日で、平日20時までの場合、1000円を返す", () => {
      const cinemaWeekday = new Date("2022-11-01T19:59:59.000+09:00");

      expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
    });

    test("映画の日で、平日20時以降の場合、1000円を返す", () => {
      const cinemaWeekday = new Date("2022-11-01T20:00:00.000+09:00");

      expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
    });

    test("映画の日で、土日20時までの場合、1200円を返す", () => {
      const cinemaSaturday = new Date("2022-10-01T19:59:59.000+09:00");

      expect(CinemaCitizenPlan.price(cinemaSaturday).value).toBe(1200);
    });

    test("映画の日で、土日20時以降の場合、1000円を返す", () => {
      const cinemaSaturday = new Date("2022-10-01T20:00:00.000+09:00");

      expect(CinemaCitizenPlan.price(cinemaSaturday).value).toBe(1000);
    });

    test("映画の日ではなく、平日20時までの場合、1000円を返す。ただし祝日は考慮していない", () => {
      const weekday = addBusinessDays(new Date(), 1);
      if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);

      weekday.setHours(19, 59, 59);

      expect(CinemaCitizenPlan.price(weekday).value).toBe(1000);
    });

    test("映画の日ではなく、平日20時以降の場合、1000円を返す。ただし祝日は考慮していない", () => {
      const weekday = addBusinessDays(new Date(), 1);
      if (isFirstDayOfMonth(weekday)) addBusinessDays(weekday, 1);

      weekday.setHours(20, 0, 0);

      expect(CinemaCitizenPlan.price(weekday).value).toBe(1000);
    });

    test("映画の日ではなく、土日20時までの場合、1300円を返す。ただし祝日は考慮していない", () => {
      const saturday = nextSaturday(new Date());
      if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);

      saturday.setHours(19, 59, 59);

      expect(CinemaCitizenPlan.price(saturday).value).toBe(1300);
    });

    test("映画の日ではなく、土日20時以降の場合、1000円を返す。ただし祝日は考慮していない", () => {
      const saturday = nextSaturday(new Date());
      if (isFirstDayOfMonth(saturday)) nextSaturday(saturday);

      saturday.setHours(20, 0, 0);

      expect(CinemaCitizenPlan.price(saturday).value).toBe(1000);
    });
  });
});
