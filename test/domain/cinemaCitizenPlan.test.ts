import { CinemaCitizenPlan } from "domain/plan/cinemaCitizenPlan";

describe("CinemaCitizenPlan", () => {
  it(".price", () => {
    const plan = new CinemaCitizenPlan();
    expect(plan.price()).toBe(1000);
  });
});
