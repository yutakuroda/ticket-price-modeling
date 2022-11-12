import { Customer } from "domain/customer/customer";

export interface Plan {
  isAvailable(customer: Customer): boolean;
  price(now: Date): number;
}
