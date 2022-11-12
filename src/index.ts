import { CheapestPlanCalculator } from "domain/cheapestPlanCalculator";
import { Customer } from "domain/customer";

// TODO: 他の引数も追加する
const cunstomer = new Customer(50);
const now = new Date();

const cheapestPlan = new CheapestPlanCalculator().calculate(cunstomer, now);

console.log(cheapestPlan.price());
