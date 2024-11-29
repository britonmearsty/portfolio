import Hero from "../components/About/Hero";
import ProfessionalBio from "../components/About/ProfessionalBio";
import Skills from "../components/About/Skills";
import Timeline from "../components/About/Timeline";
import PersonalTouch from "../components/About/PersonalTouch";
import Education from "../components/About/Education";
import Highlights from "../components/About/Highlights";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-24">
        <Hero />
        <ProfessionalBio />
        <Skills />
        <Timeline />
        <PersonalTouch />
        <Education />
        <Highlights />
      </div>
    </div>
  );
}
