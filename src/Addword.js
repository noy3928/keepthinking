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
  const input_password = React.useRef(null);

  return (
    <React.Fragment>
      <Backarrow
        src={backarrow}
        onClick={() => {
          //   dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야겠죠?
          // 예를 들면 이렇게요.
          props.history.push("/");
          document.querySelector(".pencil").style.top = "300px";
          document.querySelector(".pencil").style.right = "-50px";
          document.querySelector(".pencil").style.transform = "rotate(0deg)";
          document.querySelector(".pencil").style.cursor = "pointer";
        }}
      />
      <Maintextbox>
        <Topbox>
          <Testbox>
            <div>
              <span>제목 :</span>
              <input type="text" ref={input_word}></input>
            </div>
          </Testbox>
          <Testbox>
            <div>
              <span>내용 :</span>
              <input type="text" ref={input_desc}></input>
            </div>
          </Testbox>
          <Testbox>
            <div>
              <span>글쓴이 :</span>
              <input type="text" ref={input_ex}></input>
            </div>
          </Testbox>
          <Testbox>
            <div>
              <span>비번 :</span>
              <input
                type="text"
                className="password-input"
                ref={input_password}
                placeholder="비밀번호를 꼭 기억해주세요!"
              ></input>
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
                pass: input_password.current.value,
              };
              // console.log("-------단어를 추가합니다");
              dispatch(addDicFB(my_add_word));
              props.history.goBack();
              // dispatch(loadDicFB());
              document.querySelector(".pencil").style.top = "300px";
              document.querySelector(".pencil").style.right = "-50px";
              document.querySelector(".pencil").style.transform =
                "rotate(0deg)";
              document.querySelector(".pencil").style.cursor = "pointer";
            }}
          >
            추가하기 +
          </Addwordtitle>
        </Downbox>
      </Maintextbox>
      {/* <Pencilimg src={pencil} /> */}
    </React.Fragment>
  );
};

const Backarrow = styled.img`
  width: auto;
  height: auto;
  max-width: 40px;
  max-height: 40px;
  position: absolute;
  top: 330px;
  left: 160px;
  cursor: pointer;
  z-index: 11;
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
    grid-template-columns: 22% 78%;
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
    ::placeholder {
      opacity: 0.6;
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
