import { z } from "zod";
import { insertApplicationSchema } from "@/lib/validator";

export type Application = z.infer<typeof insertApplicationSchema> & {
  id: string;
  applied_date: Date;
  created_at: Date;
  updated_at: Date;
};
