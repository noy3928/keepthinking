import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addDicFB, loadDicFB } from "./redux/modules/dictionary";

import pencil from "./img/pencil.png";
import backarrow from "./img/arrow.png";

const AddDic = (props) => {
  const dispatch = useDispatch();
  const my_words = useSelector((state) => state.dic.list);
  const input_word = React.useRef(null);
  const input_desc = React.useRef(null);
  const input_ex = React.useRef(null);
  let test = props.match;
  console.log(test.path);

  return (
    <React.Fragment>
      <Maintextbox>
        <Backarrow
          src={backarrow}
          onClick={() => {
            //   dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야겠죠?
            // 예를 들면 이렇게요.
            props.history.goBack();
          }}
        />
        <Topbox>
          <Testbox>
            <div>
              <span>단어 :</span>
              <input type="text" ref={input_word}></input>
            </div>
          </Testbox>
          <Testbox>
            <div>
              <span>설명 :</span>
              <input type="text" ref={input_desc}></input>
            </div>
          </Testbox>
          <Testbox>
            <div>
              <span>예시 :</span>
              <input type="text" ref={input_ex}></input>
            </div>
          </Testbox>
        </Topbox>
        <Downbox>
          <Addwordtitle
            onClick={() => {
              let my_add_word = {
                word: input_word.current.value,
                desc: input_desc.current.value,
                exam: input_ex.current.value,
              };
              dispatch(addDicFB(my_add_word));

              props.history.goBack();
              dispatch(loadDicFB());
            }}
          >
            단어 추가하기 +
          </Addwordtitle>
        </Downbox>
      </Maintextbox>
      <Pencilimg src={pencil} />
    </React.Fragment>
  );
};

const Backarrow = styled.img`
  width: auto;
  height: auto;
  max-width: 40px;
  max-height: 40px;
  position: absolute;
  top: -47px;
  left: 18px;
  cursor: pointer;
`;

const Topbox = styled.div``;

const Downbox = styled.div`
  width: 100%;
`;

const Addword = styled.button`
  width: 100%;
  height: 20px;
  border: none;
`;

const Addwordtitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  font-size: 40px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  :hover {
    color: #3f51b5;
  }
`;

const Maintextbox = styled.div`
  position: absolute;
  bottom: -100px;
  left: 155px;
  z-index: 11;
  width: 50%;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 8px 0px 20px;
  box-sizing: border-box;
`;

const Testbox = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & div {
    display: grid;
    grid-template-columns: 15% 85%;
    width: 100%;
    height: 100%;
  }
  & span {
    font-size: 28px;
    display: flex;
  }
  & input {
    font-size: 25px;
    font-family: "handFont";
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #6161616e;
    transition: 0.5s ease-in-out;
    :focus {
      outline: none;
      border-bottom: 1px solid #616161;
    }
    height: 50%;
  }
`;

const Pencilimg = styled.img`
  position: absolute;
  right: 10px;
  top: -30px;
  max-width: 500px;
  max-height: 500px;
  width: auto;
  height: auto;
  filter: drop-shadow(-10px -10px 10px #000);
  z-index: 11;
  // cursor: pointer;
  transition: 0.5s ease-in-out;
  transform: rotate(230deg);
  // :hover {
  //   transform: rotate(230deg) scale(1.1);
  // }
  // :hover > {
  //   transform: rotate(230deg) scale(1.1);
  // }
`;

export default AddDic;
