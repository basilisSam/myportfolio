import React from "react";
import Video from "../../Sunset.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Aloha 🤙</HeroH1>
        <HeroP>This is Sam WebSite</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
