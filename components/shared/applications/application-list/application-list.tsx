"use client";
import { Button } from "@/components/ui/button";
import { EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { formatDate } from "@/lib/constants/formatDate";
import { Application } from "@/types";
import { deleteApplication } from "@/lib/actions/application.action";
import { useState } from "react";
import { DialogDemo } from "@/components/shared/applications/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ApplicationList = ({
  data,
  title,
}: {
  data: Application[];
  title?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("Create");
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  return (
    <div className="my-10 justify-between">
      {title && <h3 className="h3-bold mb-4 text-gray-600">{title}</h3>}
      <div className="flex justify-end">
        <DialogDemo
          open={open}
          setOpen={setOpen}
          type={type}
          setType={setType}
          selectedApp={selectedApp}
        />
      </div>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((app: Application) => (
            <div
              key={app.id}
              className="p-4 border border-gray-400 rounded-md bg-white hover:bg-[#A281A7] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:z-10 relative delay-35 cursor-pointer"
            >
              <p className="font-semibold text-gray-900">{app.company_name}</p>
              <p className="text-sm text-gray-800">{app.job_title}</p>
              <p
                className={`text-sm ${app.status === "REJECTED" ? "text-red-400" : "text-gray-600"}`}
              >
                <Button
                  className={`${app.status === "REJECTED" ? "bg-red-400" : app.status === "OFFER" ? "bg-green-400" : app.status === "INTERVIEWING" ? "bg-yellow-400 text-gray-200" : "bg-gray-600 text-gray-900"} cursor-pointer hover:${app.status === "REJECTED" ? "bg-red-400  text-gray-900" : app.status === "OFFER" ? "bg-green-400  text-gray-900" : app.status === "INTERVIEWING" ? "bg-yellow-400  text-gray-900" : "bg-gray-500 text-gray-200"}`}
                >
                  {app.status}
                </Button>
              </p>
              <p className="text-sm text-gray-700">{app.notes}</p>
              <p className="text-xs text-gray-700">
                {formatDate(app.applied_date)}
              </p>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  className="hover:bg-black hover:text-white cursor-pointer"
                  onClick={() => {
                    setType("Update");
                    setSelectedApp(app);
                    setOpen(true);
                  }}
                >
                  <PencilIcon size={12} />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild suppressHydrationWarning>
                    <Button
                      variant="ghost"
                      className="bg-red-500 hover:bg-red-600 text-black hover:text-white cursor-pointer"
                    >
                      <Trash2Icon size={12} />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your application from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>
                        <form action={deleteApplication.bind(null, app.id)}>
                          <Button
                            variant="destructive"
                            type="submit"
                            className="text-white bg-black hover:bg-black"
                          >
                            Continue
                            <Trash2Icon size={12} />
                          </Button>
                        </form>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No applications found</p>
        </div>
      )}
    </div>
  );
};

export default ApplicationList;
