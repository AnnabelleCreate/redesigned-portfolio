import type { Metadata } from "next";
import { RoboticsDataSummitView } from "@/components/robotics-data-summit-view";

export const metadata: Metadata = {
  title: "Robotics & Data Summit",
  description:
    "Event identity, social campaign, and editorial design for the Robotics & Data Summit.",
};

export default function RoboticsDataSummitPage() {
  return <RoboticsDataSummitView />;
}
