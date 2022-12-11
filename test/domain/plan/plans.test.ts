import {
  CinemaCitizenPlan,
  CinemaCitizenSeniorPlan,
  GeneralPlan,
  SeniorPlan,
  UniversityStudentPlan,
  HighSchoolStudentPlan,
  InfantAndElementarySchoolStudentPlan,
  DisabilityPlan,
  DisabilityUnderHighSchoolStudentPlan,
  Plans,
} from "domain/plan";
import {
  Age,
  CINEMA_CITIZEN_CATEGORY,
  Customer,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer";
import { CinemaDate } from "domain/date";

const plansArray = [
  CinemaCitizenPlan,
  CinemaCitizenSeniorPlan,
  GeneralPlan,
  SeniorPlan,
  UniversityStudentPlan,
  HighSchoolStudentPlan,
  InfantAndElementarySchoolStudentPlan,
  DisabilityPlan,
  DisabilityUnderHighSchoolStudentPlan,
];

const plans = new Plans(plansArray);

describe("Plans", () => {
  describe("count", () => {
    test("plansが空の場合は0を返す", () => {
      expect(new Plans([]).count()).toBe(0);
    });

    test("plansが空ではない場合はplansの数を返す", () => {
      expect(plans.count()).toBe(plansArray.length);
    });
  });

  describe("availablePlans", () => {
    const cunstomer = new Customer(
      new Age(30),
      CINEMA_CITIZEN_CATEGORY.Guest,
      DISABILITY_CATEGORY.None,
      SCHOOL_CATEGORY.None
    );

    test("plansが空の場合は0を返す", () => {
      expect(new Plans([]).availablePlans(cunstomer).count()).toBe(0);
    });

    test("plansが空ではない場合は利用可能なplansの数を返す", () => {
      const availablePlans = plans.availablePlans(cunstomer);
      expect(availablePlans.count()).toBe(1); // generalPlanのみ
      expect(availablePlans.availablePlans(cunstomer).count()).toBe(1);
    });
  });

  describe("bestPricePlan", () => {
    test("plansが空の場合は例外を投げる", () => {
      expect(() => new Plans([]).bestPricePlan(new CinemaDate())).toThrow();
    });

    test("plansが空ではない場合は最安値のplanを返す", () => {
      expect(plans.bestPricePlan(new CinemaDate())).toBe(
        DisabilityUnderHighSchoolStudentPlan
      );
    });
  });
});
