import { BestPlanCalculator } from "domain/bestPlanCalculator";
import { CINEMA_CITIZEN } from "domain/cinemaCitizen";
import { Customer } from "domain/customer";

const cunstomer = new Customer(50, CINEMA_CITIZEN.Member);
const now = new Date();

const bestPlan = new BestPlanCalculator().calculate(cunstomer, now);

console.log(bestPlan.price());
