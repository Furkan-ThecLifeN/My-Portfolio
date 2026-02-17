import React from "react";
import ProjectsHero from "../components/ProjectsHero/ProjectsHero";
import CineVerse from "../components/ProjectContainer/Projects/CineVerse";
import MyPortfolio from "../components/ProjectContainer/Projects/MyPortfolio";
import "./ProjectsPage.css";
import Cinemania from "../components/ProjectContainer/Projects/Cinemania";
import NikeStore from "../components/ProjectContainer/Projects/NikeStore";
import FocusFrame from "../components/ProjectContainer/Projects/FocusFrame";
import PortfolioWebsite from "./../components/ProjectContainer/Projects/PortfolioWebsite";
import ChefsKitchen from "../components/ProjectContainer/Projects/ChefsKitchen";
import WebStudio from "../components/ProjectContainer/Projects/WebStudio";
import TravelTrucks from "../components/ProjectContainer/Projects/TravelTrucks";
import GuardiansOfMoney from "../components/ProjectContainer/Projects/GuardiansOfMoney";
import TaskHive from "../components/ProjectContainer/Projects/TaskPro";
import W1 from "../components/ProjectContainer/Projects/W1";
import LearnLingo from "../components/ProjectContainer/Projects/LearnLingo";
import EnterpriseAuth from "../components/ProjectContainer/Projects/EnterpriseAuth";
import EcommerceMicroservices from "../components/ProjectContainer/Projects/EcommerceMicroservices";
import SmartInventory from "../components/ProjectContainer/Projects/SmartInventory";

const ProjectsPage = () => {
  return (
    <>
      <ProjectsHero />
      <W1 />
      <SmartInventory />
      <EcommerceMicroservices />
      <EnterpriseAuth />
      <LearnLingo />
      <TaskHive />
      <TravelTrucks />
      <GuardiansOfMoney />
      <CineVerse />
      <MyPortfolio />
      <Cinemania />
      <NikeStore />
      <FocusFrame />
      <PortfolioWebsite />
      <ChefsKitchen />
      <WebStudio />
    </>
  );
};

export default ProjectsPage;
