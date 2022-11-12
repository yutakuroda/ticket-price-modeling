import { Customer } from "domain/customer";

export interface Plan {
  planName(): string;
  isAvailable(customer: Customer): boolean;
  price(date: Date): number;
}
