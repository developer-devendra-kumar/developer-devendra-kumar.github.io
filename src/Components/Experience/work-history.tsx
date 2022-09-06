import styled from "styled-components";
import { theme } from "../../theme/app-theme";

const StyledAboutContainer = styled.div`
  width: 100%;
  color: ${theme.colors.white};
  margin: auto;
  @media ${theme.screens.LargeScreen} {
    width: 1000px;
    padding: 0px 20px;
  }
  @media ${theme.screens.mediumScreen} {
    width: 500px;
    padding: 0px 15px;
  }
`;
const StyledTitleText = styled.div`
  color: ${theme.colors.lightestslate};
  font-size: 2rem;
  font-weight: ${theme.fonts.weight.semiBold};
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ::after {
    content: "";
    width: 70%;
    height: 1px;
    margin-left: 10px;
    background: ${theme.colors.lightestnavy};
    @media ${theme.screens.mediumScreen} {
      width: 60%;
    }
    @media ${theme.screens.smallScreen} {
      width: 50%;
    }
  }
`;
const StyledDescriptionText = styled.div`
  color: ${theme.colors.slate};
  font-size: 1rem;
  font-weight: ${theme.fonts.weight.regular};
  margin-top: 15px;
  margin-bottom: 15px;
  letter-spacing: 1px;
  width: 100%;
  @media ${theme.screens.LargeScreen} {
    width: 600px;
  }
  @media ${theme.screens.mediumScreen} {
    width: 500px;
  }
`;

const StyledOrganizationName = styled.div`
  color: ${theme.colors.green};
  font-size: 1.25rem;
  font-weight: ${theme.fonts.weight.semiBold};
  margin-top: 20px;
`;

const StyledOrganizationWorkTime = styled.div`
  color: ${theme.colors.lightestslate};
  font-size: 1rem;
  font-weight: ${theme.fonts.weight.regular};
  margin-top: 5px;
`;

const StyledOrganizationWorkDesc = styled.div`
  margin-top: 5px;
`;

interface WorkHistoryProps {}
export const WorkHistory = (props: WorkHistoryProps) => {
  return (
    <StyledAboutContainer>
      <StyledTitleText id="experience">Work History</StyledTitleText>
      <StyledDescriptionText>
        <StyledOrganizationName>
          Senior technology analyst at OakNorth global private limited, Gurgaon
        </StyledOrganizationName>
        <StyledOrganizationWorkTime>
          August 2021-Present
        </StyledOrganizationWorkTime>
        <StyledOrganizationWorkDesc>
          Created front end application with Angular and React and created
          backend with NodeJs. Created business use applications where user can
          see progress at run time. Utility to send email where user provide a
          email template and CSV with user's details. Rate change comms, Rate
          Change Automation, Collateral search.
          <br />
          <br />
          Technologies used Like HTML + CSS, SCSS, Angular 10, Javascript,
          Typescript, Socket.io, NodeJs, ReactJs, Google Maps, Docker.
        </StyledOrganizationWorkDesc>
        <StyledOrganizationName>
          Front End Developer at Gateway Software Solutions PVT. LTD., New Delhi
        </StyledOrganizationName>
        <StyledOrganizationWorkTime>
          January 2018-August 2021
        </StyledOrganizationWorkTime>
        <StyledOrganizationWorkDesc>
          Created Angular based front end from scratch where i built things like
          multi language app, payment gateway integration, Social login, Google
          maps integration, Google charts integration, Google analytics
          integration, Google Ads.
          <br />
          <br />
          Technologies used Like HTML + CSS, SCSS, Angular 5+, Javascript,
          Typescript, AWS S3, Apache 2, D3 Maps, Angular Material, Bootstrap,
          Razor Pay (Payment Gateway).
          <br />
          <br />
          Worked on Java web applications where i was responsible to maintain
          and add new features to the application.
          <br />
          <br />
          Technologies used Like JAVA, HTML + CSS, JSP, AWS S3, Apache 2, Spring
          framework, Hibernate framework, Maven, jQuery, MySQL, DB2, Junit,
          Jwebunit, Apache Tomcat.
        </StyledOrganizationWorkDesc>
      </StyledDescriptionText>
    </StyledAboutContainer>
  );
};
