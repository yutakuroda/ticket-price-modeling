import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaCitizenPlan } from "domain/plan";

describe("CinemaCitizenPlan", () => {
  const plan = new CinemaCitizenPlan();

  describe(".isAvailable", () => {
    test("シネマシティズン会員かつ59歳未満の場合、trueを返す", () => {
      const cunstomer = new Customer(
        new Age(59),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None
      );

      expect(plan.isAvailable(cunstomer)).toBe(true);
    });

    test("シネマシティズン会員ではない場合、falseを返す", () => {
      const cunstomer = new Customer(
        new Age(59),
        CINEMA_CITIZEN_CATEGORY.Guest,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None
      );

      expect(plan.isAvailable(cunstomer)).toBe(false);
    });

    test("60歳以上の場合、falseを返す", () => {
      const cunstomer = new Customer(
        new Age(60),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None
      );

      expect(plan.isAvailable(cunstomer)).toBe(false);
    });
  });

  it(".price", () => {
    const now = new Date();

    expect(plan.price(now)).toBe(1000);
  });
});
