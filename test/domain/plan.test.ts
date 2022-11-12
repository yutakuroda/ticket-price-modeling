import { Plan } from "domain/plan/plan";

describe("Plan", () => {
  it(".price", () => {
    const plan = new Plan();
    expect(plan.price()).toBe(1000);
  });
});
