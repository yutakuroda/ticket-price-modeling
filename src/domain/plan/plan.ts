import { Customer } from "domain/customer";
import { Price } from "domain/plan/price";

export interface Plan {
  planName(): string;
  isAvailable(customer: Customer): boolean;
  price(date: Date): Price;
}
