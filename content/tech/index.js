import { SiPowerbi, SiPython } from "react-icons/si";
import { FaFileExcel, FaTools } from "react-icons/fa";
import { MdAutoFixHigh } from "react-icons/md";

export const techContent = {
  pageTitle: "Tech | Moses Oni",
  intro:
    "These are the tools and capabilities I keep reaching for when the work calls for troubleshooting, reporting, analysis, and automation.",
  items: [
    {
      title: "Power BI",
      id: 1,
      icon: SiPowerbi,
      desc: "Build dashboards that turn raw data into useful reporting, trends, and performance signals.",
      tag: "reporting",
      bg: "bg-yellow-50",
      text: "text-yellow-600",
    },
    {
      title: "Python",
      id: 2,
      icon: SiPython,
      desc: "Automate repetitive work, clean datasets, and connect reporting workflows with lightweight scripts.",
      tag: "automation",
      bg: "bg-green-50",
      text: "text-green-600",
    },
    {
      title: "Excel",
      id: 3,
      icon: FaFileExcel,
      desc: "Analyze datasets, organize operational data, and produce quick reporting when speed matters.",
      tag: "analysis",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
    },
    {
      title: "IT Support",
      id: 4,
      icon: FaTools,
      desc: "Troubleshoot issues, document solutions, and keep systems usable for the people who rely on them.",
      tag: "support",
      bg: "bg-indigo-50",
      text: "text-indigo-600",
    },
    {
      title: "Automation",
      id: 5,
      icon: MdAutoFixHigh,
      desc: "Reduce manual work by designing repeatable processes, templates, and system-driven workflows.",
      tag: "systems",
      bg: "bg-pink-50",
      text: "text-pink-600",
    },
  ],
};
