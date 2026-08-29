import React from "react";
import fs from "fs";
import path from "path";
import JobsClient, { JobOpening } from "./JobsClient";

export const metadata = {
  title: "Careers | SBHR Consultancy",
  description: "Explore active opportunities across engineering, product design, and operations. Apply directly through our secure pipeline.",
};

async function getJobs(): Promise<JobOpening[]> {
  const jobsDirectory = path.join(process.cwd(), "src/content/jobs");
  if (!fs.existsSync(jobsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(jobsDirectory);
  const allJobs: JobOpening[] = [];

  for (const fileName of fileNames) {
    if (fileName.endsWith(".json")) {
      const fullPath = path.join(jobsDirectory, fileName);
      try {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const job = JSON.parse(fileContents) as JobOpening;
        if (job && job.id && job.title) {
          allJobs.push(job);
        }
      } catch (err) {
        console.error(`Error reading job file ${fileName}:`, err);
      }
    }
  }

  return allJobs;
}

export default async function JobsPage() {
  const jobs = await getJobs();
  return <JobsClient jobs={jobs} />;
}
