import React from "react";
import Video from "../../video.mp4";
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
        <HeroH1>Aloha This is Sam WebSite.</HeroH1>
        <HeroP>Sam is a coder that love travelling and Extreme Sports</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
