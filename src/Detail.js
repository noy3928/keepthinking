import React from "react";
import { useDispatch, useSelector } from "react-redux";
// 내가 만든 액션 생성 함수를 불러옵니다.
import { deleteDicFB, loadDicFB } from "./redux/modules/dictionary";
import styled from "styled-components";

import backarrow from "./img/arrow.png";
import pencil from "./img/pencil.png";

const Detail = (props) => {
  const dispatch = useDispatch();

  // 스토어에서 상태값 가져오기
  const dic_list = useSelector((state) => state.dic.list);
  // url 파라미터에서 인덱스 가져오기
  let dic_index = parseInt(props.match.params.index);

  return (
    <React.Fragment>
      <Backarrow
        src={backarrow}
        onClick={() => {
          //   dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야겠죠?
          // 예를 들면 이렇게요.
          props.history.goBack();
          document.querySelector(".pencil").style.top = "300px";
          document.querySelector(".pencil").style.right = "-50px";
          document.querySelector(".pencil").style.transform = "rotate(0deg)";
          document.querySelector(".pencil").style.cursor = "pointer";
        }}
      />
      <Mainbox>
        <Testbox>
          <Textinbox>
            <Eachdesc>
              <Wordtitle>제목 </Wordtitle>{" "}
              <Worddetail>: {dic_list[dic_index].word}</Worddetail>
            </Eachdesc>
            <Eachdesc>
              <Wordtitle>내용 </Wordtitle>{" "}
              <Worddetail>: {dic_list[dic_index].desc}</Worddetail>
            </Eachdesc>
            <Exam>
              <Wordtitle>글쓴이 </Wordtitle>{" "}
              <Worddetail>: {dic_list[dic_index].exam}</Worddetail>
            </Exam>
            <Exam>
              <Passwordtitle>비번 :</Passwordtitle>{" "}
              <input
                class="passwordcheck"
                type="text"
                placeholder="비밀번호를 입력해야 지울 수 있어요"
                id="password"
                autoComplete="off"
              />
            </Exam>
          </Textinbox>
        </Testbox>

        {/* <Pencilimg
        src={pencil}
        onClick={() => {
          dispatch(deleteDicFB(dic_index));
          props.history.goBack();
          dispatch(loadDicFB());
        }}
      /> */}
      </Mainbox>
    </React.Fragment>
  );
};

const Backarrow = styled.img`
  width: auto;
  height: auto;
  max-width: 40px;
  max-height: 40px;
  position: absolute;
  top: 325px;
  left: 165px;
  cursor: pointer;
  z-index: 11;
`;

const Mainbox = styled.div`
  position: absolute;
  bottom: -100px;
  left: 155px;
  z-index: 11;
  width: 50%;
  height: 60%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Testbox = styled.div`
  width: 100%;
  height: 35%;
  // background-color: #fafafa;

  margin-bottom: 10px;

  font-size: 32px;
  padding-top: 20px;
`;

const Exam = styled.div`
  color: #77acff;
  display: grid;
  grid-template-columns: 23% 77%;
  margin-bottom: 10px;
`;

const Passwordtitle = styled.div`
  color: #616161;
`;

const Passwordinput = styled.input`
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
    font-size: 22px;
  }
  height: 37px;
`;

const Wordindex = styled.div`
  // width: 25px;
  // height: 25px;
  // border-radius: 20px;
  // border: 1px solid #424242;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

const Textinbox = styled.div`
  // & div {
  //   display: flex;
  //   cursor: pointer;
  //   margin-bottom: 10px;
  // }

  padding-left: 15px;
`;

const Eachdesc = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  margin-bottom: 30px;
`;

const Worddetail = styled.div`
  padding-left: 5px;
  text-align: left;
`;

const Wordtitle = styled.div``;

const Pencilimg = styled.img`
  position: absolute;
  right: -150px;
  top: 100px;
  max-width: 500px;
  max-height: 500px;
  width: auto;
  height: auto;
  filter: drop-shadow(-10px -10px 10px #000);
  z-index: 11;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transform: rotate(120deg);
  :hover {
    transform: rotate(120deg) scale(1.1);
  }
`;

export default Detail;
