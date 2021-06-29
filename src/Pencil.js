import React from "react";
import styled from "styled-components";
import pencil from "./img/pencil.png";
import { deleteDicFB, loadDicFB } from "./redux/modules/dictionary";
import { useDispatch, useSelector } from "react-redux";

const Pencil = (props) => {
  function checkThisPage(path) {
    if (path == "/detail/:index") {
    } else if (path == "/addword") {
    } else if (path == "/");
  }
  return <Pencilimg src={pencil}></Pencilimg>;
};

const Pencilimg = styled.img`
  position: absolute;
  right: -50px;
  top: 300px;
  max-width: 500px;
  max-height: 500px;
  width: auto;
  height: auto;
  filter: drop-shadow(10px 10px 10px #000);
  z-index: 11;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  :hover {
    transform: rotate(10deg) scale(1.1);
  }
`;

export default Pencil;
