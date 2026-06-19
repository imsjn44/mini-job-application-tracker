import ApplicationList from "@/components/shared/applications/application-list/application-list";
import { getApplications } from "@/lib/actions/application.action";
import { APPLICATIONS_LIMIT } from "@/lib/constants/utils";
import Pagination from "@/components/shared/applications/pagination";

type Props = {
  searchParams: { page?: string };
};

const HomePage = async (props: { searchParams: Promise<{ page: string }> }) => {
  const { page } = await props.searchParams;
  const fetchApplications = await getApplications(
    Number(page) || 1,
    APPLICATIONS_LIMIT,
  );

  return (
    <div className="space-y-8">
      <h3
        className="h3-bold text-white p-16 rounded-md bg-bottom"
        style={{
          backgroundImage: "url('/banner2.jpg')",
          backgroundPosition: "50% 30%",
        }}
      >
        Application Dashboard
      </h3>

      <ApplicationList title="My Applications" data={fetchApplications.data} />

      <div className="flex items-center justify-center">
        <Pagination totalPages={fetchApplications.totalPages} page={page} />
      </div>
    </div>
  );
};

export default HomePage;
