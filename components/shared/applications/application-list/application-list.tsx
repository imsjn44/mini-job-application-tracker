import { Button } from "@/components/ui/button";
import { EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { formatDate } from "@/lib/constants/formatDate";

const ApplicationList = ({ data, title }: { data: any; title?: string }) => {
  return (
    <div className="my-10 justify-between">
      {title && <h3 className="h3-bold mb-4 text-gray-600">{title}</h3>}
      <div className="flex justify-end">
        <Button
          className="bg-[#A281A7] p-8 h-12 w-12 mb-2 hover:bg-[#A281A7] hover:scale-120 transition-all duration-300 hover:shadow-lg"
          asChild
          variant="ghost"
        >
          <Link href="/add">
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((app: any) => (
            <div
              key={app.id}
              className="p-4 border border-gray-400 rounded-md bg-white hover:bg-[#A281A7] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:z-10 relative delay-35 cursor-pointer"
            >
              <p className="font-semibold text-gray-900">{app.company_name}</p>
              <p className="text-sm text-gray-800">{app.job_title}</p>
              <p
                className={`text-sm ${app.status === "Rejected" ? "text-red-400" : "text-gray-600"}`}
              >
                <Button
                  className={`${app.status === "Rejected" ? "bg-red-400" : app.status === "Offer" ? "bg-green-400" : app.status === "Interviewing" ? "bg-yellow-400 text-gray-200" : "bg-gray-600 text-gray-900"} cursor-pointer hover:${app.status === "Rejected" ? "bg-red-400  text-gray-900" : app.status === "Offer" ? "bg-green-400  text-gray-900" : app.status === "Interviewing" ? "bg-yellow-400  text-gray-900" : "bg-gray-500 text-gray-200"}`}
                >
                  {app.status}
                </Button>
              </p>
              <p className="text-sm text-gray-700">{app.notes}</p>
              <p className="text-xs text-gray-700">
                {formatDate(app.applied_date)}
              </p>

              <div className="flex gap-2">
                <Link href={"/apps"}>
                  <EyeIcon size={12} />
                </Link>
                <Link href={"/update"}>
                  {" "}
                  <PencilIcon size={12} />
                </Link>
                <Link href={"/update"}>
                  {" "}
                  <Trash2Icon size={12} />
                </Link>
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
