import { CinemaCitizenPlan } from "domain/plan/cinemaCitizenPlan";
import { CinemaCitizenSeniorPlan } from "domain/plan/cinemaCitizenSeniorPlan";
import { GeneralPlan } from "domain/plan/generalPlan";
import { SeniorPlan } from "domain/plan/seniorPlan";
import { UniversityStudentPlan } from "domain/plan/universityStudentPlan";
import { HighSchoolStudentPlan } from "domain/plan/highSchoolStudentPlan";
import { InfantAndElementarySchoolStudentPlan } from "./infantAndElementarySchoolStudentPlan";
import { Plan } from "domain/plan/plan";

export const allPlans: Plan[] = [
  CinemaCitizenPlan,
  CinemaCitizenSeniorPlan,
  GeneralPlan,
  SeniorPlan,
  UniversityStudentPlan,
  HighSchoolStudentPlan,
  InfantAndElementarySchoolStudentPlan,
];
