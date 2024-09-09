import { datadogLogs } from "@datadog/browser-logs";
import { usePrograms } from "../../context/program/ReadProgramContext";
import { ProgressStatus } from "../api/types";
import ManagerNavbar from "./ManagerNavbar";
import ProgramListPage from "../program/ProgramListPage";
import RoundListPage from "../round/RoundListPage";
import Footer from "common/src/components/Footer";

function LandingPage() {
  datadogLogs.logger.info("====> Route: /");
  datadogLogs.logger.info(`====> URL: ${window.location.href}`);

  return (
    <div className="bg-grey-50 flex flex-col items-center min-h-screen">
      <div className="w-full max-w-screen-2xl mx-auto px-8 mt-[3%]">
        <ProgramListPage />
        <RoundListPage />
      </div>
    </div>
  );
}

export default LandingPage;
