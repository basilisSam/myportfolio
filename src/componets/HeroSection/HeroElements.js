import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36%;
`;

export const HeroH1 = styled.h1`
  color: #80ffdb;
  font-size: 48px;
  font-family: fantasy;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40 px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32;
  }
`;
export const HeroP = styled.p`
  margin-top: 24;
  color: #ff66c4;
  font-size: 25px;
  text-align: center;
  max-width: 600px;
  font-family: fantasy;

  @media screen and (max-width: 768px) {
    font-size: 24 px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18;
  }
`;
