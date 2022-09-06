import styled from "styled-components";
import { theme } from "../../theme/app-theme";
import DevLogo from "../../assets/images/dev-logo.svg";
import { PrimaryButton } from "../Buttons/primary-button";
import resumeFile from "../../assets/files/devendra-resume-updated-5-sept.pdf";
import { useEffect, useState } from "react";
import "./header.css";

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;
const StyledHeaderLogo = styled.img`
  width: 48px;
  height: 48px;
`;
const StyledHeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  @media ${theme.screens.smallScreen} {
    display: none;
  }
`;

const StyledMobileLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

const StyledMobileLink = styled.a`
  font-family: ${theme.fonts.fontFamily.primary};
  font-weight: ${theme.fonts.weight.semiBold};
  font-size: 2.5rem;
  text-decoration: unset;
  color: ${theme.colors.lightestslate};
  :hover {
    color: ${theme.colors.lightestslate};
  }
`;
const StyledMobileMenu = styled.div`
  display: none;
  @media ${theme.screens.smallScreen} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }
`;

const StyledHeaderLink = styled.a`
  font-family: ${theme.fonts.fontFamily.primary};
  font-weight: ${theme.fonts.weight.semiBold};
  font-size: 1rem;
  padding-left: 20px;
  text-decoration: unset;
  color: ${theme.colors.lightestslate};
  :hover {
    color: ${theme.colors.lightestslate};
  }
`;

const StyledIcon = styled.span`
  font-size: 32px;
  transition: all;
  z-index: 10;
`;
const StyledMobileMenuHolder = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.navy};
  color: ${theme.colors.lightestslate};
  display: none;
  z-index: 9;
`;

interface HeaderProps {}
export const Header = (props: HeaderProps) => {
  const [showMobileMenu, setIsShowMobileMenu] = useState(false);
  const [isWindowScrolled, setIsWindowScrolled] = useState(false);
  const [windowScrolledY, setWindowScrolledY] = useState(0);

  const handleMobileMenu = () => {
    setIsShowMobileMenu(!showMobileMenu);
    let mobileMenuHolder = document.getElementById("mobileMenu");
    let bodyTag = document.getElementById("body");
    if (!showMobileMenu) {
      mobileMenuHolder?.classList.add("show");
      mobileMenuHolder?.classList.remove("hide");
      if(bodyTag) bodyTag.style.overflow = "hidden";
    } else if (showMobileMenu) {
      mobileMenuHolder?.classList.add("hide");
      mobileMenuHolder?.classList.remove("show");
      if (bodyTag) bodyTag.style.overflow = "auto";
    }
  };

  useEffect(() => {
    setWindowScrolledY(window.scrollY);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setIsWindowScrolled(true);
      } else {
        setIsWindowScrolled(false);
      }
    });
    handleMobileHeader();
  }, [windowScrolledY,isWindowScrolled]);

  const handleMobileHeader = () => {
    if (window.innerWidth <= 767 && isWindowScrolled) {
      let header = document.getElementById("header");
      header?.classList.add("mobile-sticky");
    }else{
      let header = document.getElementById("header");
      header?.classList.remove("mobile-sticky");
    }
  };
  return (
    <StyledHeader id="header">
      <StyledHeaderLeft>
        <StyledHeaderLogo src={DevLogo} alt="dev" />
      </StyledHeaderLeft>
      <StyledHeaderRight>
        <StyledHeaderLink href="#about">About</StyledHeaderLink>
        <StyledHeaderLink href="#experience">Experience</StyledHeaderLink>
        <StyledHeaderLink href="#contact">Contact</StyledHeaderLink>
        <StyledHeaderLink
          href={resumeFile}
          download={"resume.pdf"}
          target={"_blank"}
        >
          <PrimaryButton text="Resume" padding="1rem 1.25rem" />
        </StyledHeaderLink>
      </StyledHeaderRight>
      <StyledMobileMenu>
        <StyledIcon
          className="material-symbols-rounded"
          onClick={handleMobileMenu}
        >
          {showMobileMenu ? `close` : `menu`}
        </StyledIcon>
        <StyledMobileMenuHolder id="mobileMenu">
          <StyledMobileLinks onClick={handleMobileMenu}>
            <StyledMobileLink href="#about">About</StyledMobileLink>
            <StyledMobileLink href="#experience">Experience</StyledMobileLink>
            <StyledMobileLink href="#contact">Contact</StyledMobileLink>
            <StyledMobileLink
              href={resumeFile}
              download={"resume.pdf"}
              target={"_blank"}
            >
              <PrimaryButton text="Resume" padding="1.25rem 1.5rem" fontSize="2.5rem"/>
            </StyledMobileLink>
          </StyledMobileLinks>
        </StyledMobileMenuHolder>
      </StyledMobileMenu>
    </StyledHeader>
  );
};
