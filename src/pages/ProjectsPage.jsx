import React from "react";
import ProjectsHero from "../components/ProjectsHero/ProjectsHero";
import CineVerse from "../components/ProjectContainer/Projects/CineVerse";
import BeatVerse from "../components/ProjectContainer/Projects/BeatVerse";
import MyPortfolio from "../components/ProjectContainer/Projects/MyPortfolio";
import DailyO from "../components/ProjectContainer/Projects/DailyO";
import "./ProjectsPage.css";
import Cinemania from "../components/ProjectContainer/Projects/Cinemania";
import NikeStore from "../components/ProjectContainer/Projects/NikeStore";
import FocusFrame from "../components/ProjectContainer/Projects/FocusFrame";
import PortfolioWebsite from "./../components/ProjectContainer/Projects/PortfolioWebsite";
import ChefsKitchen from "../components/ProjectContainer/Projects/ChefsKitchen";
import WebStudio from "../components/ProjectContainer/Projects/WebStudio";

const ProjectsPage = () => {
  return (
    <>
      <ProjectsHero />
      <CineVerse />
      {/*<BeatVerse />*/}
      <MyPortfolio />
      <DailyO />
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
