import { Routes, Route } from "react-router";
import { Home } from "./Pages/Home";
import { Lms } from "./Pages/Lms";
import { Facilities } from "./Pages/Facilities";
import { Chairman } from "./Pages/Chairman";
import "./App.css";
import { Principal } from "./Pages/Principal";
import { Philosophy } from "./Pages/Philosophy";
import { Montessori } from "./Pages/Montessori";
import { DigitalEducation } from "./Pages/DigitalEdu";
import { AIrobotics } from "./Pages/AIRobotics";
import { Steam } from "./Pages/Steam";
import { CompBasedEdu } from "./Pages/CompBasedEdu";
import { PersonalityDev } from "./Pages/PersonalityDev";
import { CharacterBuilding } from "./Pages/CharBuilding";
import { Quran } from "./Pages/Quran";
import { OutdoorEduTrips } from "./Pages/OutdoorEduTrips";
import { PhysicalDevelopment } from "./Pages/PhysicalDev";
import { TalentHunt } from "./Pages/TalentHunt";
import { AdmissionProcess } from "./Pages/AdmissionProcess";
import { Discipline } from "./Pages/Discipline";
import {AdmissionForm} from "./Components/AdmissionNow/About/Index.jsx";
import {ContactUs} from "./Pages/ContactUs.jsx";
import { Franchiseoffer } from "./Pages/Franchiseoffer.jsx";
import { OurCampuses } from "./Pages/OurCampuses.jsx";
import { FranchiseModel } from "./Pages/FranchiseModel.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lms" element={<Lms />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/chairman-message" element={<Chairman />} />
      <Route path="/principal-message" element={<Principal />} />
      <Route path="/philosophy" element={<Philosophy />} />
      <Route path="/montessori-wing" element={<Montessori />} />
      <Route path="/digital-education" element={<DigitalEducation />} />
      <Route path="/ai-robotics" element={<AIrobotics />} />
      <Route path="/steam" element={<Steam />} />
      <Route path="/competency-based-education" element={<CompBasedEdu />} />
      <Route path="/personality-development" element={<PersonalityDev />} />
      <Route path="/character-building" element={<CharacterBuilding />} />
      <Route path="/quran-o-seerat" element={<Quran />} />
      <Route path="/outdoor-educational-trips" element={<OutdoorEduTrips />} />
      <Route path="/physical-development" element={<PhysicalDevelopment />} />
      <Route path="/intellectual-development" element={<TalentHunt />} />
      <Route path="/admission-process" element={<AdmissionProcess />} />
      <Route path="/disipline+code-of-dress" element={<Discipline />} />
      <Route path="/admissionnow" element={<AdmissionForm />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/franchise-offer" element={<Franchiseoffer />} />
      <Route path="/franchise-model" element={<FranchiseModel />} />
      <Route path="/our-campuses" element={<OurCampuses />} />
    </Routes>
  );
}

export default App;
