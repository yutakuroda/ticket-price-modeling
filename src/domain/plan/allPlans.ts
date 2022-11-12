import { CinemaCitizenPlan } from "domain/plan/cinemaCitizenPlan";
import { CinemaCitizenSeniorPlan } from "domain/plan/cinemaCitizenSeniorPlan";
import { Plan } from "domain/plan/plan";

export const allPlans: Plan[] = [CinemaCitizenPlan, CinemaCitizenSeniorPlan];
