import styled from "styled-components";
import { theme } from "../../theme/app-theme";
interface StyledPrimaryButtonProps {
  marginTop?: string;
  padding?: string;
  fontSize?: string;
}
const StyledPrimaryButton = styled.div<StyledPrimaryButtonProps>`
  color: ${theme.colors.green};
  background-color: transparent;
  border: 1px solid ${theme.colors.green};
  border-radius: 4px;
  padding: ${({ padding }) => (padding ? padding : `1.25rem 1.75rem;`)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : `1rem;`)};
  font-family: ${theme.fonts.fontFamily.primary};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : `0px`)};
  width: max-content;
  :hover {
    background-color: ${theme.colors.greentint};
    outline: none;
  }
  @media ${theme.screens.mediumScreen} {
    margin: 20px 0px;
  }
`;

interface PrimaryButtonProps {
  text: string;
  marginTop?: string;
  padding?: string;
  fontSize?: string;
}
export const PrimaryButton = (props: PrimaryButtonProps) => {
  return <StyledPrimaryButton marginTop={props.marginTop} padding={props.padding} fontSize={props.fontSize}>{props.text}</StyledPrimaryButton>;
};
