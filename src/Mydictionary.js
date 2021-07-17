// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import plus from "./plus.png";

// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";
import { deleteDicFB } from "./redux/modules/dictionary";

import pencil from "./img/pencil.png";

const Mydic = (props) => {
  const dispatch = useDispatch();
  // 버킷리스트를 리덕스 훅으로 가져오기
  const dic_list = useSelector((state) => state.dic.list);
  // console.log("Mydictionary컴포넌트에서 뿌려질 데이터", dic_list);

  return (
    <React.Fragment>
      <Maintextbox>
        {dic_list.map((list, index) => {
          return (
            <Testbox className="list_item" key={index}>
              <Wordindex>{index + 1}</Wordindex>
              <Textinbox>
                <Eachdesc
                  onClick={() => {
                    props.history.push("/detail/" + index);
                    document.querySelector(".pencil").style.top = "450px";
                    document.querySelector(".pencil").style.right = "-10px";
                    document.querySelector(".pencil").style.transform =
                      "rotate(120deg)";
                  }}
                >
                  <Wordtitle>제목 </Wordtitle>{" "}
                  <Worddetail>: {list.word}</Worddetail>
                </Eachdesc>
                <Eachdesc
                  onClick={() => {
                    props.history.push("/detail/" + index);
                    document.querySelector(".pencil").style.top = "450px";
                    document.querySelector(".pencil").style.right = "-10px";
                    document.querySelector(".pencil").style.transform =
                      "rotate(120deg)";
                  }}
                >
                  <Wordtitle>내용 </Wordtitle>{" "}
                  <Worddetail>: {list.desc}</Worddetail>
                </Eachdesc>
                <Exam
                  onClick={() => {
                    props.history.push("/detail/" + index);
                    document.querySelector(".pencil").style.top = "450px";
                    document.querySelector(".pencil").style.right = "-10px";
                    document.querySelector(".pencil").style.transform =
                      "rotate(120deg)";
                  }}
                >
                  <Examtitle>글쓴이 </Examtitle>{" "}
                  <Worddetail>: {list.exam}</Worddetail>
                </Exam>
              </Textinbox>
            </Testbox>
          );
        })}
      </Maintextbox>
      {/* <Pencilimg
        src={pencil}
        onClick={() => {
          props.history.push("/addword");
        }}
      /> */}
    </React.Fragment>
  );
};

const Maintextbox = styled.div`
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

const Wordindex = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid #424242;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Testbox = styled.div`
  width: 100%;
  height: auto;
  min-height: 170px;
  // background-color: #fafafa;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 10% 90%;
  font-size: 28px;
`;

const Textinbox = styled.div`
  // & div {
  //   display: flex;
  //   cursor: pointer;
  //   margin-bottom: 10px;
  // }

  padding-left: 15px;
`;

const Wordtitle = styled.div`
  text-decoration: underline;
  text-underline-position: under;
`;

const Worddetail = styled.div`
  padding-left: 5px;
  text-align: left;
`;

const Exam = styled.div`
  color: #77acff;
  display: grid;
  grid-template-columns: 20% 80%;
  cursor: pointer;
`;

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

const Eachdesc = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Examtitle = styled.div`
  text-decoration: underline;
  text-underline-position: under;
  color: #616161;
`;

// wordsBox{
//   overflow: scroll;
//   scrollbar-width: none;
//   -ms-overflow-style: none;
//   height: 55vh;
//   margin: 25px;
//   padding-bottom: 10px;
//   box-shadow:inset 0 1px 5px rgb(198, 197, 197);
//   /* box-shadow:inset 0 1px 5px rgb(255, 247, 222); */
// }
// .wordsBox::-webkit-scrollbar{
//   display:none;
// }

export default Mydic;

// <Plus
//
// >
// {/* <Pencilimg src={pencil} /> */}
// </Plus>
