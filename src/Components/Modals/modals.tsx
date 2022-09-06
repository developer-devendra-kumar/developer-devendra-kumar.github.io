import { ReactNode } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { theme } from "../../theme/app-theme";

const StylesModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.navyshadow};
  z-index: 9;
`;

const StyleCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  background: ${theme.colors.white};
  color: ${theme.colors.navy};
  box-shadow: 0px 0px 2px 2px ${theme.colors.navyshadow};
  z-index: 10;
  width: 200px;
  height: auto;
  @media ${theme.screens.LargeScreen} {
    width: 700px;
  }
  @media ${theme.screens.mediumScreen} {
    width: 500px;
  }
  @media ${theme.screens.smallScreen} {
    width: 300px;
  }
`;
interface ModalProps {
  image?: string;
  message?: string;
  actions?: ReactNode;
  onClose: () => void;
}

export const ModalBackdrop = () => {
  return <StylesModalBackdrop />;
};

const ModalImage = styled.img`
  width: 100%;
  height: auto;
`;
const ModalMessage = styled.div`
  color: ${theme.colors.navy};
  font-size: 1.5rem;
  font-weight: ${theme.fonts.weight.bold};
  margin-top: 15px;
  margin-bottom: 15px;
  letter-spacing: 1px;
  width: 100%;
`;
const StyledIcon = styled.span`
  font-size: 2rem;
  transition: all;
  color: ${theme.colors.navy};
  cursor: pointer;
`;
const StyledFlexDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;

export const ModalCard = (props: ModalProps) => {
  return (
    <StyleCard>
      <StyledFlexDiv>
        <ModalMessage>{props.message}</ModalMessage>
        <StyledIcon
          className="material-symbols-rounded"
          onClick={props.onClose}
        >
          cancel
        </StyledIcon>
      </StyledFlexDiv>
      <ModalImage src={props.image} alt={props.message} />
    </StyleCard>
  );
};

export const Modal = (props: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalCard {...props} />,
        document.getElementById("modal-root")!
      )}
    </>
  );
};
