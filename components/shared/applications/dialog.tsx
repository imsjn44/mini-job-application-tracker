"use client";
import { Button } from "@/components/ui/button";
import { Application } from "@/types";
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
import { PencilIcon } from "lucide-react";
type DialogDemoProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  type: string;
  setType: (type: string) => void;
  selectedApp: Application | null;
};
import { ApplicationForm } from "./application-form";
import { Plus } from "lucide-react";
export function DialogDemo({
  open,
  setOpen,
  type,
  setType,
  selectedApp,
}: DialogDemoProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-[#A281A7] p-8 h-12 w-12 mb-2 hover:bg-[#A281A7] hover:scale-120 transition-all duration-300 hover:shadow-lg cursor-pointer"
          variant="ghost"
          onClick={() => setType("Create")}
        >
          <Plus className="h-12 w-12 text-black" />
        </Button>
      </DialogTrigger>

      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className="hover:bg-black hover:text-white cursor-pointer"
          onClick={() => setType("Update")}
        >
          <PencilIcon size={12} className="hidden" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm max-h-[90vh] overflow-y-auto ">
        <DialogHeader>
          <DialogDescription>
            Fill in the form to {type === "Create" ? "create" : "update"} your
            appplication.
          </DialogDescription>
        </DialogHeader>
        <ApplicationForm
          type={type}
          Application={selectedApp}
          ApplicationId={selectedApp?.id}
        />
      </DialogContent>
    </Dialog>
  );
}
