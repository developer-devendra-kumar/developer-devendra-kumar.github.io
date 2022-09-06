import styled from "styled-components";
import { theme } from "../../theme/app-theme";
import { PrimaryButton } from "../Buttons/primary-button";
import resumeFile from "../../assets/files/devendra-resume-updated-5-sept.pdf";

const StyledIntroContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${theme.colors.white};
  @media ${theme.screens.LargeScreen} {
    width: 1100px;
    margin: auto;
    height: auto;
  }
  @media ${theme.screens.mediumScreen} {
    width: 600px;
    margin: auto;
    height: 70vh;
  }
`;
const StyledIntroLine1 = styled.div`
  color: ${theme.colors.green};
  font-size: 1rem;
  font-weight: ${theme.fonts.weight.light};
  margin-top: 40px;
`;
const StyledIntroLine2 = styled.div`
  color: ${theme.colors.lightestslate};
  font-size: 5rem;
  font-weight: ${theme.fonts.weight.bold};
  margin-top: 10px;
  @media ${theme.screens.mediumScreen} {
    font-size: 3rem;
  }
  @media ${theme.screens.smallScreen} {
    font-size: 3.5rem;
  }
`;
const StyledIntroLine3 = styled.div`
  color: ${theme.colors.white};
  font-size: 5rem;
  font-weight: ${theme.fonts.weight.bold};
  margin-top: 10px;
  @media ${theme.screens.mediumScreen} {
    font-size: 3rem;
    margin: 10px 0px;
  }
  @media ${theme.screens.smallScreen} {
    font-size: 3.5rem;
  }
`;
const StyledDescriptionText = styled.div`
  color: ${theme.colors.slate};
  font-size: 1rem;
  font-weight: ${theme.fonts.weight.regular};
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  @media ${theme.screens.LargeScreen} {
    width: 600px;
  }
  @media ${theme.screens.mediumScreen} {
    width: 500px;
  }
`;

const StyledA = styled.a`
  text-decoration: unset;
`;
interface IntroProps {}
export const Intro = (props: IntroProps) => {
  return (
    <StyledIntroContainer>
      <StyledIntroLine1>Hi, my name is</StyledIntroLine1>
      <StyledIntroLine2>Devendra Kumar</StyledIntroLine2>
      <StyledIntroLine3>I build things for the web.</StyledIntroLine3>
      <StyledDescriptionText>
        Resourceful Front End Web Developer bringing in-depth knowledge of
        latest technology trends to produce clean website design. Experience
        handling complex HTML and CSS coding, design and extensions to meet
        organization's front-facing internet needs.
      </StyledDescriptionText>
      <StyledA href={resumeFile} download={"resume.pdf"} target={"_blank"}>
        <PrimaryButton text="Download Resume" marginTop="50px" />
      </StyledA>
    </StyledIntroContainer>
  );
};
