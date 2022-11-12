import { CINEMA_CITIZEN } from "domain/cinemaCitizen";
import { DISABILITY } from "domain/disability";

export class Customer {
  constructor(
    public age: number,
    public cinemaCitizen: CINEMA_CITIZEN,
    public disability: DISABILITY
  ) {}
}
