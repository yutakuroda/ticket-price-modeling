import { Customer } from "domain/customer";

export interface Plan {
  isAvailable(customer: Customer): boolean;
  price(date: Date): number;
}
