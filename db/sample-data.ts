import { JobType, Status } from "@prisma/client";

const today = new Date();

const sampleData = {
  applications: [
    {
      company_name: "HamroTech",
      job_title: "Nextjs developer",
      job_type: JobType.FULL_TIME,
      status: Status.REJECTED,
      applied_date: today,
      notes: "Applied via careers page",
    },
    {
      company_name: "Astronova",
      job_title: "Full Stack Developer",
      job_type: JobType.FULL_TIME,
      status: Status.INTERVIEWING,
      applied_date: today,
      notes: "Second Round Completed",
    },
    {
      company_name: "Amazon",
      job_title: "Backend Developer",
      job_type: JobType.FULL_TIME,
      status: Status.REJECTED,
      applied_date: today,
      notes: "Didn't clear technical round",
    },
    {
      company_name: "StartupX",
      job_title: "React Developer",
      job_type: JobType.PART_TIME,
      status: Status.OFFER,
      applied_date: today,
      notes: "Offer received, considering",
    },
    {
      company_name: "CedarGate",
      job_title: "Data Engineer Intern",
      job_type: JobType.INTERNSHIP,
      status: Status.REJECTED,
      applied_date: today,
      notes: "Didn't match requirements",
    },
    {
      company_name: "Microsoft",
      job_title: "Software Engineer Intern",
      job_type: JobType.INTERNSHIP,
      status: Status.INTERVIEWING,
      applied_date: today,
      notes: "Completed online assessment",
    },
    {
      company_name: "Amazon",
      job_title: "Frontend Developer",
      job_type: JobType.FULL_TIME,
      status: Status.OFFER,
      applied_date: today,
      notes: "Received offer letter, reviewing compensation",
    },
    {
      company_name: "Netflix",
      job_title: "Full Stack Developer",
      job_type: JobType.FULL_TIME,
      status: Status.REJECTED,
      applied_date: today,
      notes: "Rejected after technical interview",
    },
  ],
};

export default sampleData;

// const sampleData = {
//   applications: [
//     {
//       company_name: "Google",
//       job_title: "Frontend Developer Intern",
//       job_type: JobType.INTERNSHIP,
//       status: Status.INTERVIEWING,
//       applied_date: today,
//       notes: "Applied via careers page",
//     },
//     {
//       company_name: "Microsoft",
//       job_title: "Full Stack Developer",
//       job_type: JobType.FULL_TIME,
//       status: Status.INTERVIEWING,
//       applied_date: today,
//       notes: "First round completed",
//     },
//     {
//       company_name: "Amazon",
//       job_title: "Backend Developer",
//       job_type: JobType.FULL_TIME,
//       status: Status.REJECTED,
//       applied_date: today,
//       notes: "Didn't clear technical round",
//     },
//     {
//       company_name: "StartupX",
//       job_title: "React Developer",
//       job_type: JobType.PART_TIME,
//       status: Status.OFFER,
//       applied_date: today,
//       notes: "Offer received, considering",
//     },
//     {
//       company_name: "CedarGate",
//       job_title: "Data Engineer Intern",
//       job_type: JobType.INTERNSHIP,
//       status: Status.REJECTED,
//       applied_date: today,
//       notes: "Didn't match requirements",
//     },
//     {
//       company_name: "Microsoft",
//       job_title: "Software Engineer Intern",
//       job_type: JobType.INTERNSHIP,
//       status: Status.INTERVIEWING,
//       applied_date: today,
//       notes: "Completed online assessment",
//     },
//     {
//       company_name: "Amazon",
//       job_title: "Frontend Developer",
//       job_type: JobType.FULL_TIME,
//       status: Status.OFFER,
//       applied_date: today,
//       notes: "Received offer letter, reviewing compensation",
//     },
//     {
//       company_name: "Netflix",
//       job_title: "Full Stack Developer",
//       job_type: JobType.FULL_TIME,
//       status: Status.REJECTED,
//       applied_date: today,
//       notes: "Rejected after technical interview",
//     },
//   ],
// };

// export default sampleData;
