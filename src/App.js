import logo from "./logo.svg";
import "./App.css";
import React from "react";

import styled from "styled-components";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

// import { firestore } from "./firebase";
import { loadDicFB, addDic } from "./redux/modules/dictionary";

import Mydic from "./Mydictionary";
import Addword from "./Addword";
import Spinner from "./Spinner";
import Detail from "./Detail";
import Test from "./Test";
import background from "./img/Background.png";
import background2 from "./img/Background1.png";
import backshadow from "./img/backgroundshadow.png";
import note from "./img/note.png";
import background3 from "./img/background3.png";

import Pencil from "./Pencil";

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
});

class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {};
    // ref는 이렇게 선언합니다!
    this.text = React.createRef();
  }

  componentDidMount() {
    this.props.load();
    console.log(this.props.is_loaded);
  }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item); //리덕스에서 가져온 함수를 여기서 실행시킨다.
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
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
          </Mainbox>
          <TitleBox>
            <Maintitle>MD|</Maintitle>
            <SubtitleBox>
              <My>My</My>
              <Dictio>Dictionary</Dictio>
            </SubtitleBox>
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

const TitleBox = styled.div`
  display: flex;
  width: 600px;
  height: 200px;
  font-family: "Ivy";
  position: absolute;
  left: 50px;
  bottom: 30px;
  flex-direction: row;
`;

const Maintitle = styled.div`
  font-size: 150px;
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
  font-size: 45px;
`;
const My = styled.div``;

const Dictio = styled.div`
  margin-top: 10px;
`;

const Mainbody = styled.div`
  background-image: url("${background3}");
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
  font-family: "WintheCancer";
  color: #616161;
`;

const Mainshadow = styled.img`
  width: 170%;
  height: 170%;
  position: absolute;
  bottom: 150px;
  z-index: 10;
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

const Noteimg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
`;

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
