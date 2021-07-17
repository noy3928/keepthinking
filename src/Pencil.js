import React, { useRef } from "react";
import styled from "styled-components";
import pencil from "./img/pencil.png";

import { deleteDicFB, loadDicFB } from "./redux/modules/dictionary";
import { useDispatch, useSelector } from "react-redux";

// let top = "";
// let right = "";

const Pencil = (page) => {
  const dispatch = useDispatch();
  let pathdata = page.page.location.pathname;
  //   console.log("확인용", props.props);
  let dic_str = page.page.location.pathname;
  let dic_index = Number(dic_str.replace(/[^0-9]/g, ""));
  const dic_list = useSelector((state) => state.dic.list);
  let dic_id = "";
  if (dic_list.length > 0) {
    dic_id = dic_list[dic_index].id;
  }
  const modal = useRef(null);
  const overlay = useRef(null);
  const btnCloseModal = useRef(null);

  const closeModal = function () {
    modal.current.classList.add("hidden");
    overlay.current.classList.add("hidden");
  };

  function modalCloseByButton() {
    closeModal();
  }

  function modalCloseByOverlay() {
    closeModal();
  }

  // console.log("모달", modal.current.classList);

  return (
    <div>
      <React.Fragment>
        <Pencilimg
          className="pencil"
          src={pencil}
          onClick={() => {
            //   dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야겠죠?
            // 예를 들면 이렇게요.
            if (pathdata == "/") {
              page.page.history.push("/addword");
              console.log("단어추가화면으로 이동");
              document.querySelector(".pencil").style.top = "-20px";
              document.querySelector(".pencil").style.right = "-5px";
              document.querySelector(".pencil").style.transform =
                "rotate(-130deg)";
              document.querySelector(".pencil").style.filter =
                "drop-shadow(-10px -10px 10px #000)";
              document.querySelector(".pencil").style.cursor = "default";
            } else if (pathdata.includes("detail")) {
              let checkPassword = document.getElementById("password").value;
              let realPassword = dic_list[dic_index].pass;

              if (checkPassword == realPassword) {
                dispatch(deleteDicFB(dic_id));
                page.page.history.push("/");
                document.querySelector(".pencil").style.top = "300px";
                document.querySelector(".pencil").style.right = "-50px";
                document.querySelector(".pencil").style.transform =
                  "rotate(0deg)";
                document.querySelector(".pencil").style.cursor = "pointer";
              } else {
                console.log("비밀번호가 틀립니다.");
                modal.current.classList.remove("hidden");
                overlay.current.classList.remove("hidden");
              }
            }
          }}
        ></Pencilimg>
        <div class="modal hidden" ref={modal}>
          <button
            class="close-modal"
            ref={btnCloseModal}
            onClick={() => {
              modalCloseByButton();
            }}
          >
            &times;
          </button>
          <h1>비밀번호가 틀렸습니다</h1>
        </div>
        <div
          class="overlay hidden"
          ref={overlay}
          onClick={() => {
            modalCloseByOverlay();
          }}
        ></div>
      </React.Fragment>
    </div>
  );
};

const Pencilimg = styled.img`
  :hover {
    transform: rotate(10deg) scale(1.1);
  }
`;

export default Pencil;
