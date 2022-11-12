import { Age } from "domain/customer/age";
import { CINEMA_CITIZEN_CATEGORY } from "domain/customer/cinemaCitizenCategory";
import { CinemaCitizenPlan } from "domain/plan/cinemaCitizenPlan";
import { Customer } from "domain/customer/customer";
import { DISABILITY_CATEGORY } from "domain/customer/disabilityCategory";
import { SCHOOL_CATEGORY } from "domain/customer/schoolCategory";

describe("CinemaCitizenPlan", () => {
  const plan = new CinemaCitizenPlan();

  describe(".isAvailable", () => {
    test("シネマシティズン会員の場合、trueを返す", () => {
      const cunstomer = new Customer(
        new Age(50),
        CINEMA_CITIZEN_CATEGORY.Member,
        DISABILITY_CATEGORY.None,
        SCHOOL_CATEGORY.None
      );

      expect(plan.isAvailable(cunstomer)).toBe(true);
    });

    test("シネマシティズン会員ではない場合、falseを返す", () => {
      const cunstomer = new Customer(
        new Age(50),
        CINEMA_CITIZEN_CATEGORY.Guest,
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
