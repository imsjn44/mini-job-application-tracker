import ApplicationList from "@/components/shared/applications/application-list/application-list";
import sampleData from "@/db/sample-data";

const HomePage = () => {
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
      <ApplicationList
        title=" My Applications"
        data={sampleData.applications}
      />
    </div>
  );
};
export default HomePage;
