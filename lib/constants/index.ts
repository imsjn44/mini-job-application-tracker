import { Application } from "@/types";

export const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || "Mini job application tracker";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A simple web application to track job applications through different hiring stages";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const defaultValues = {
  company_name: "",
  job_title: "",
  job_type: "FULL_TIME",
  status: "APPLIED",
  notes: "",
} as any;

export type EditValuesType = Application;
