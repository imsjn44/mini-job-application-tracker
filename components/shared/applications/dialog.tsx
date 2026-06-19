"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DialogDemoProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
import { ApplicationForm } from "./application-form";
import { Plus } from "lucide-react";
export function DialogDemo({ open, setOpen }: DialogDemoProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-[#A281A7] p-8 h-12 w-12 mb-2 hover:bg-[#A281A7] hover:scale-120 transition-all duration-300 hover:shadow-lg cursor-pointer"
          variant="ghost"
        >
          <Plus className="h-12 w-12 text-black" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm max-h-[90vh] overflow-y-auto ">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Fill in the form to create your new appplication.
          </DialogDescription>
        </DialogHeader>
        <ApplicationForm />
      </DialogContent>
    </Dialog>
  );
}
