import React from "react";
import styled from "styled-components";
import pencil from "./img/pencil.png";
import background from "./img/Background.png";
import backshadow from "./img/backgroundshadow.png";
import note from "./img/note.png";

const Spinner = (props) => {
  return (
    <React.Fragment>
      <Mainbody>
        <Mainshadow src={backshadow} />
        <Mainbox>
          <Noteimg src={note} />
        </Mainbox>
      </Mainbody>
    </React.Fragment>
  );
};

const Mainbody = styled.div`
  background-image: url("${background}");
  background-size: cover;
  max-width: 100vw;
  height: 100vh;
  // background-color: #e2eafc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  overflow: hidden;
  padding-bottom: 280px;
  box-sizing: border-box;
  position: relative;
  font-family: "handFont";
  color: #616161;
`;

const Mainshadow = styled.img`
  width: 170%;
  height: 170%;
  position: absolute;
  bottom: 150px;
  z-index: 10;
`;

const Noteimg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Mainbox = styled.div`
  max-width: 700px;
  max-height: 700px;
  width: auto;
  height: auto;
  // background-color: #b6ccfe;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 50px 0px 0px 0px;
  position: relative;
  box-sizing: border-box;
`;

export default Spinner;
