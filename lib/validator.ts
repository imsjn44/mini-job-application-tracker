import { z } from "zod";

const JobTypeSchema = z.enum(["FULL_TIME", "PART_TIME", "INTERNSHIP"]);

const StatusSchema = z.enum(["APPLIED", "INTERVIEWING", "OFFER", "REJECTED"]);

export const insertApplicationSchema = z.object({
  company_name: z.string().min(3, "Company name must be at least 3 characters"),
  job_title: z.string().min(3, "Job type must be atleast 3 character long"),
  job_type: JobTypeSchema,
  status: StatusSchema,
  notes: z.string().refine((val) => val.trim().length > 0, {
    message: "Notes required",
  }),
});

export const updateApplicationSchema = insertApplicationSchema.extend({
  id: z.string().min(1, "Id required").optional(),
});
