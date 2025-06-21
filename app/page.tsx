import HomePage from "@/components/Home/homePage";
import React from "react";
import HeroSection from "@/components/HeroSection";
import ProjectCards from "@/components/project/projectCards";
import { getProjects } from "@/server/action/projectAction";
import ContactSection from '@/components/ContactSection';
import { db } from "@/server";
import AnimatedSkills from "@/components/AnimatedSkills";


const page = async () => {
    const projectData = await getProjects()
    console.log("Project Data:", projectData);
    const aboutData = await db.query.about.findFirst();
  
  return (
    <div className="flex justify-center items-center flex-col">
      <HeroSection image={aboutData?.image || ""} aboutMe={aboutData?.aboutMe || ""} />
      <AnimatedSkills/>
      {projectData && <ProjectCards projectData={projectData} />}
      <ContactSection />
      {/* <HomePage/> */}
    </div>
  );
};

export default page;
