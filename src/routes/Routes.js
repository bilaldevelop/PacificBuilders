import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ManpowerSection from "../pages/Manpower";
import MyPage from "../pages/Mypage";
import CountryWideOperations from "../pages/AboutUs/Countrywide";
import CEOPage from "../pages/AboutUs/Ceo";
// import ContactForm from "../pages/AboutUs/Contect";
import MissionVision from "../pages/AboutUs/Mission&Vision";
import ManagementProfile from "../pages/AboutUs/ManagementProfile";
import FounderMessage from "../pages/AboutUs/FounderMessage";
import LogosGallery from "../pages/AboutUs/MajorClient";
import ProjectsCompleted from "../pages/Projects/ProjectInHand";
import SugarMill from "../pages/Services/Powerplant";
import ToolsAndPlants from "../pages/Resources/Tools&Plants";
import ManPower from "../pages/Resources/ManPower";
import CompletionCertificates from "../pages/Credentials/CompletionCertificates";
import ReadyMixConcrete from "../pages/PacificGroup/ReadyMixConcrete";
import TCCConstruction from "../pages/PacificGroup/Pacificconcrete";
import OfficeLocation from "../pages/ContactUs/Officelocation";
import JobApplicationForm from "../pages/ContactUs/JobApplication";
import PECCertificates from "../pages/Credentials/PECCertificates";
import AffiliationCertificates from "../pages/Credentials/AffiliationCertificates";
import SugarIndustries from "../pages/Services/Powerplant";
import ToolsAndPlantsdetail from "../pages/Resources/ToolsAndPlantsdetail";
import ManPowerList from "../pages/Resources/ManPowerList";
import OrganizationChart from "../pages/AboutUs/Organizationchart";



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<ManpowerSection />} />
      <Route path="/MyPage" element={<MyPage />} />
      <Route path="/country-wide-operations" element={<CountryWideOperations />} />
      <Route path="/ceo" element={<CEOPage />} />
      <Route path="/mission-and-vision" element={<MissionVision />} />
      <Route path="/management-profile" element={<ManagementProfile/>}/>
      <Route path="/founder-message" element={<FounderMessage/>}/>
      <Route path="/major-clients" element={<LogosGallery/>}/>
      <Route path="/project-in-hand" element={<ProjectsCompleted/>}/>
      <Route path="/power-plants" element={<SugarIndustries/>}/>
      <Route path="/tools-and-plants" element={<ToolsAndPlants/>}/>
      <Route path="/man-power" element={<ManPower/>}/>
      <Route path="/completion-certificates" element={<CompletionCertificates/>}/>
      <Route path="/Pacific-mix-concrete" element={<ReadyMixConcrete/>}/>
      <Route path="/Pacific-concrete" element={<TCCConstruction/>}/>
      <Route path="/job-application" element={<JobApplicationForm/>}/>
      <Route path="/office-location" element={<OfficeLocation/>}/>
      <Route path="/pec-certificates" element={<PECCertificates/>}/>
      <Route path="/affiliation-certificates" element={<AffiliationCertificates/>}/>
      <Route path="/tools-and-plants-list" element={<ToolsAndPlantsdetail/>}/>
      <Route path="/man-power-list" element={<ManPowerList/>}/>
      <Route path="/organizational-chart" element={<OrganizationChart/>}/>
      <Route path="/power-plants" element={<SugarMill/>}/>
      <Route path="/power-plants" element={<SugarMill/>}/>
    </Routes>
  );
}

export default AppRoutes;
