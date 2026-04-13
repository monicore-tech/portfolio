import { studentPerformanceAnalysis } from "./projects/student-performance-analysis";
import { operationsSupportDashboard } from "./projects/operations-support-dashboard";
import { automationWorkflowToolkit } from "./projects/automation-workflow-toolkit";

export const allProjects = [
  studentPerformanceAnalysis,
  operationsSupportDashboard,
  automationWorkflowToolkit,
];

export const workContent = {
  pageTitle: "Work | Moses Oni",
  intro:
    "A few selected projects that reflect how I think about reporting, support workflows, and automation.",
};

export const getProjectSlugs = () => allProjects.map((project) => project.slug);

export const getProjectBySlug = (slug) =>
  allProjects.find((project) => project.slug === slug);
