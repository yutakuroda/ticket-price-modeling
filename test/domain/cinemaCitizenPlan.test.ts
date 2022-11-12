import { CinemaCitizenPlan } from "domain/plan/cinemaCitizenPlan";

describe("CinemaCitizenPlan", () => {
  it(".price", () => {
    const plan = new CinemaCitizenPlan();
    const now = new Date();

    expect(plan.price(now)).toBe(1000);
  });
});
