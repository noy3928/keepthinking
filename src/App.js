import logo from "./logo.svg";
import "./App.css";
import React from "react";

import styled from "styled-components";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

// import { firestore } from "./firebase";
import { loadDicFB, addDic, getPath } from "./redux/modules/dictionary";

import Pencil from "./Pencil";
import Mydic from "./Mydictionary";
import Addword from "./Addword";
import Detail from "./Detail";
import background2 from "./img/Background1.png";
import backshadow from "./img/backgroundshadow.png";
import note from "./img/note.png";
import background4 from "./img/greenBackground.png";
import card from "./img/card.png";
import title from "./img/title4.png";

import "./style.css";

const mapStateTopProps = (state) => ({
  dic_list: state.dic.list,
  is_loaded: state.dic.is_loaded,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadDicFB());
  },
  create: (new_item) => {
    dispatch(addDic(new_item));
  },
  // getPath: (path) => {
  //   dispatch(getPath(path));
  // },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {};

    // ref는 이렇게 선언합니다!
    this.path = React.createRef();
  }

  componentDidMount() {
    // console.log("지금 로드생성함수를 호출합니다.");
    this.props.load();
  }

  componentDidUpdate() {
    // let path = this.path.current.props.path;
    // console.log(path);
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    let data = this.props;
    return (
      <div className="App">
        <Mainbody>
          <Mainshadow src={backshadow} />
          <Mainbox>
            <Noteimg src={note} />
            <Switch>
              <Route path="/" exact component={Mydic} />
              <Route path="/addword" component={Addword} />
              <Route path="/detail/:index" component={Detail} />
            </Switch>
            <Pencil page={data} />
            <Cardbox>
              <div>
                <Cardimg src={card} />
                <Cardmasseage>
                  어떤 생각을 <br />
                  하고 계신가요?
                </Cardmasseage>
              </div>
            </Cardbox>
          </Mainbox>
          <Sizemessage>The page supports minimum size of 1000px</Sizemessage>
          <TitleBox>
            {/* <Maintitle>WT|</Maintitle>
            <SubtitleBox>
              <My>What is your</My>
              <Dictio>Thinking</Dictio>
            </SubtitleBox> */}
            <TitleImg src={title} />
          </TitleBox>
        </Mainbody>
      </div>
    );
  }
}

{
  /* <button
              onClick={() => {
                dispatch(deleteDicFB(index));
              }}
            >
              지우기
            </button> */
}

const Cardbox = styled.div`
  position: absolute;
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
  bottom: 10px;
  left: -300px;
  transform: rotate(-10deg);
  &div {
    position: relative;
  }
`;

const Cardimg = styled.img`
  width: 100%;
  height: 100%;
  filter: drop-shadow(3px 3px 1px #000);
`;

const Cardmasseage = styled.div`
  top: 55px;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 35px;
`;

const TitleBox = styled.div`
  display: flex;
  width: auto;
  height: auto;
  max-width: 200px;
  max-height: 200px;
  font-family: "Ivy";
  position: absolute;
  left: 30px;
  top: 30px;
  // flex-direction: row;
  // color: #fafafa;
  z-index: 12;
`;

const TitleImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Maintitle = styled.div`
  font-size: 70px;
  width: auto;
  height: auto;
  max-width: 300px;
  max-height: 300px;
  // filter: drop-shadow(10px 10px 10px #000);
`;

const SubtitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 25px;
`;
const My = styled.div``;

const Dictio = styled.div`
  margin-top: 2px;
`;

const Mainbody = styled.div`
  background-image: url("${background4}");
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
  @media screen and (max-width: 1000px) {
    padding-bottom: 100px;
  }
`;

const Mainshadow = styled.img`
  width: 170%;
  height: 170%;
  position: absolute;
  bottom: 190px;
  z-index: 10;
`;

const Sizemessage = styled.div`
  display: none;
  font-family: "Ivy";
  color: #fafafa;
  font-size: 60px;
  @media screen and (max-width: 1000px) {
    display: block;
  }
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
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Noteimg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
