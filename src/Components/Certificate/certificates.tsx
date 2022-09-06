import styled from "styled-components";

import advanceJavaScript from "../../assets/certificates/js-cert.jpeg";
import javaScriptCert from "../../assets/certificates/JavaScript_certificate.jpg";
import htmlCert from "../../assets/certificates/HTML_certificate.jpg";
import sunriseCoreJava from "../../assets/certificates/sunrise-core-java.jpg";
import sunriseAdvanceJava from "../../assets/certificates/sunrise-adjava.jpg";
import sunriseIndustrialTraining from "../../assets/certificates/sunrise-COIT.jpg";
import netcampNMandWD from "../../assets/certificates/netcamp-NM&WD.jpg";
import netcampAndroid from "../../assets/certificates/netcamp-android.jpg";
import netcampIndustrialTraining from "../../assets/certificates/netcamp-COIT.jpg";
import sololearnJava from "../../assets/certificates/sololearn-Java_certificate.jpg";
import sololearnSQL from "../../assets/certificates/sololearn-SQL_certificate.jpg";
import sololearnPHP from "../../assets/certificates/sololearn-PHP_certificate.jpg";
import { theme } from "../../theme/app-theme";
import { useState } from "react";
import { Modal } from "../Modals/modals";

const StyledCertificateHolder = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: ${theme.colors.lightestslate};
  justify-content: center;
  align-items: center;
`;
const StyledCertificatesContainer = styled.div`
  width: 100%;
  color: ${theme.colors.white};
  margin: 20px auto;
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
  margin-bottom: 10px;
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
const StyledCertificate = styled.div``;
const StyledCertificateImage = styled.img`
  width: 100%;
  height: auto;
  :hover {
    transform: scale(1.15);
    box-shadow: ${theme.colors.navyshadow};
    transition: all 250ms;
  }
  @media ${theme.screens.LargeScreen} {
    width: 333px;
  }
  @media ${theme.screens.mediumScreen} {
    width: 166px;
  }
`;
type CertificatesDataType = {
  name: string;
  url: string;
};
const certificatesData: CertificatesDataType[] = [
  {
    name: "Advanced Javascript",
    url: advanceJavaScript,
  },
  {
    name: "Javascript",
    url: javaScriptCert,
  },
  {
    name: "HTML",
    url: htmlCert,
  },
  {
    name: "Sunrise Core Java",
    url: sunriseCoreJava,
  },
  {
    name: "Sunrise Advanced Java",
    url: sunriseAdvanceJava,
  },
  {
    name: "Sunrise Industrial training",
    url: sunriseIndustrialTraining,
  },
  {
    name: "NetCamp Network and web development",
    url: netcampNMandWD,
  },
  {
    name: "NetCamp Android",
    url: netcampAndroid,
  },
  {
    name: "NetCamp Industrial training",
    url: netcampIndustrialTraining,
  },
  {
    name: "SoloLearn Java",
    url: sololearnJava,
  },
  {
    name: "SoloLearn SQL",
    url: sololearnSQL,
  },
  {
    name: "SoloLearn PHP",
    url: sololearnPHP,
  },
];

export const Certificates = () => {
  const initialModalData = {
    name: "",
    url: "",
  };
    const bodyTag = document.getElementById("body")!;
  const [modalData, setModalData] = useState(initialModalData);
  const handleClick = (data: CertificatesDataType) => {
    setModalData(data);
    bodyTag.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setModalData(initialModalData);
    bodyTag.style.overflow = "auto";
  };

  return (
    <>
      {modalData.url && (
        <Modal
          image={modalData.url}
          message={modalData.name}
          onClose={handleModalClose}
        />
      )}
      <StyledCertificatesContainer id="certificates">
        <StyledTitleText>Certificates</StyledTitleText>
        <StyledCertificateHolder>
          {certificatesData.map((data, index) => (
            <StyledCertificate key={index}>
              <StyledCertificateImage
                src={data.url}
                alt={data.name}
                onClick={handleClick.bind(this, { ...data })}
              />
            </StyledCertificate>
          ))}
        </StyledCertificateHolder>
      </StyledCertificatesContainer>
    </>
  );
};
