import { BestPlanCalculator } from "domain/bestPlanCalculator";
import { Customer } from "domain/customer";

// TODO: 他の引数も追加する
const cunstomer = new Customer(50);
const now = new Date();

const bestPlan = new BestPlanCalculator().calculate(cunstomer, now);

console.log(bestPlan.price());
