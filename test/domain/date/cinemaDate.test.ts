import {
  nextMonday,
  nextTuesday,
  nextWednesday,
  nextThursday,
  nextFriday,
  nextSaturday,
  nextSunday,
} from "date-fns";

import { CinemaDate } from "domain/date";

describe("CinemaDate", () => {
  describe("#isWeekDay", () => {
    test("月曜日の場合はtrueを返す", () => {
      const monday = nextMonday(new Date());
      expect(new CinemaDate(monday).isWeekDay()).toBe(true);
    });
    test("火曜日の場合はtrueを返す", () => {
      const tuesday = nextTuesday(new Date());
      expect(new CinemaDate(tuesday).isWeekDay()).toBe(true);
    });
    test("水曜日の場合はtrueを返す", () => {
      const wednesday = nextWednesday(new Date());
      expect(new CinemaDate(wednesday).isWeekDay()).toBe(true);
    });
    test("木曜日の場合はtrueを返す", () => {
      const thursday = nextThursday(new Date());
      expect(new CinemaDate(thursday).isWeekDay()).toBe(true);
    });
    test("金曜日の場合はtrueを返す", () => {
      const friday = nextFriday(new Date());
      expect(new CinemaDate(friday).isWeekDay()).toBe(true);
    });

    test("土曜日の場合はfalseを返す", () => {
      const saturday = nextSaturday(new Date());
      expect(new CinemaDate(saturday).isWeekDay()).toBe(false);
    });
    test("日曜日の場合はfalseを返す", () => {
      const sunday = nextSunday(new Date());
      expect(new CinemaDate(sunday).isWeekDay()).toBe(false);
    });
  });

  describe("#isLateShow", () => {
    test("20時以降の場合はtrueを返す", () => {
      const lateShow = new Date();
      lateShow.setHours(20, 0, 0);
      expect(new CinemaDate(lateShow).isLateShow()).toBe(true);
    });
    test("20時未満の場合はfalseを返す", () => {
      const lateShow = new Date();
      lateShow.setHours(19, 59, 59);
      expect(new CinemaDate(lateShow).isLateShow()).toBe(false);
    });
  });

  describe("#isCinemaDay", () => {
    test("1日の場合はtrueを返す", () => {
      const cinemaDay = new Date();
      cinemaDay.setDate(1);
      expect(new CinemaDate(cinemaDay).isCinemaDay()).toBe(true);
    });
    test("1日以外の場合はfalseを返す", () => {
      const cinemaDay = new Date();
      cinemaDay.setDate(2);
      expect(new CinemaDate(cinemaDay).isCinemaDay()).toBe(false);
    });
  });
});
