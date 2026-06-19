"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { useRouter } from "next/navigation";
import type { Application } from "@/types";
import { updateApplicationSchema } from "@/lib/validator";
import { defaultValues } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { insertApplicationSchema } from "@/lib/validator";
import {
  createApplication,
  updateApplication,
} from "@/lib/actions/application.action";

export function ApplicationForm({
  type,
  Application,
  ApplicationId,
}: {
  type: string;
  Application?: Application | null;
  ApplicationId?: string;
}) {
  const router = useRouter();

  // const currentDefaults = type === "Create" ? defaultValues : editDefaultValues;

  // const form = useForm<z.infer<typeof insertApplicationSchema>>({
  //   resolver: zodResolver(insertApplicationSchema),
  //   defaultValues: defaultValues,
  // });

  const form = useForm<z.infer<typeof insertApplicationSchema>>({
    resolver:
      type === "Update"
        ? zodResolver(updateApplicationSchema)
        : zodResolver(insertApplicationSchema),
    defaultValues,
  });

  type SubmitHandler<TFieldValues> = (
    data: TFieldValues,
    event?: React.BaseSyntheticEvent,
  ) => any;

  // Handle form submit
  const onSubmit: SubmitHandler<
    z.infer<typeof insertApplicationSchema>
  > = async (values) => {
    if (type === "Create") {
      const res = await createApplication(values);

      if (!res.success) {
        toast("Error");
      } else {
        toast("Application created successfull");
        router.push(`/`);
      }
    }
    if (type === "Update") {
      if (!ApplicationId) {
        router.push(`/`);
        return;
      }

      const res = await updateApplication({ ...values, id: ApplicationId });

      if (!res.success) {
        toast("Eror");
      } else {
        toast("Updated successfully");
        router.push(`/`);
      }
    }
  };
  return (
    <Card className="w-full sm:max-w-md bg-[#A281A7] text-gray-900 border border-gray-700">
      <CardHeader>
        <CardTitle className="text-lg">
          {type === "Create" ? "Add " : "Edit "}job applications
        </CardTitle>
        <CardDescription className="text-gray-700">
          {type === "Create" ? "Create" : "Update "}
          {type === "Create" ? "new" : "your "} jobs to track.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="company_name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="company_name">Company Name</FieldLabel>
                  <Input
                    {...field}
                    className="placeholder:text-black"
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter company's name"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="job_title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="job_title">Job Title</FieldLabel>
                  <Input
                    {...field}
                    className="placeholder:text-black"
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter the job title"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="job_type"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="job_type">Job Type</FieldLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full max-w-48">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="FULL_TIME">FULL_TIME</SelectItem>
                        <SelectItem value="PART_TIME">PART_TIME</SelectItem>
                        <SelectItem value="INTERNSHIP">INTERNSHIP</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="status"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="job_status">Job Status</FieldLabel>

                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full max-w-48">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="APPLIED">APPLIED</SelectItem>
                        <SelectItem value="INTERVIEWING">
                          INTERVIEWING
                        </SelectItem>
                        <SelectItem value="OFFER">OFFER</SelectItem>
                        <SelectItem value="REJECTED">REJECTED</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="notes"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="notes">Notes</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="notes"
                      placeholder="Ex:Rejected on Interview round"
                      rows={3}
                      className="min-h-24 resize-none placeholder:text-gray-700"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-num text-gray-700">
                        {field.value.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription className="text-black">
                    Include the main reason of the being on current status
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button
            className="border border-none hover:bg-black hover:text-white cursor-pointer"
            type="button"
            variant="outline"
            onClick={() => form.reset()}
          >
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo" className="cursor-pointer">
            {type === "Create" ? "Create" : "Update"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
